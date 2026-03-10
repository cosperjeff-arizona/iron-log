// ─────────────── STORAGE MODULE ───────────────
// All Iron Log data lives in localStorage under namespaced keys.

const KEYS = {
  logs: 'ironlog-logs',
  week: 'ironlog-week'
};

// ── Workout Logs ──

export function getLogs() {
  try {
    const raw = localStorage.getItem(KEYS.logs);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read logs:', e);
    return [];
  }
}

export function saveLogs(logs) {
  try {
    localStorage.setItem(KEYS.logs, JSON.stringify(logs));
    return true;
  } catch (e) {
    console.error('Failed to save logs:', e);
    return false;
  }
}

export function addLog(entry) {
  const logs = getLogs();
  logs.push(entry);
  return saveLogs(logs);
}

export function deleteLog(timestamp) {
  const logs = getLogs().filter(l => l.timestamp !== timestamp);
  return saveLogs(logs);
}

// ── Week State ──

export function getCurrentWeek() {
  const val = parseInt(localStorage.getItem(KEYS.week), 10);
  return (val >= 1 && val <= 4) ? val : 1;
}

export function setCurrentWeek(num) {
  localStorage.setItem(KEYS.week, String(num));
}

export function advanceWeek() {
  const cur = getCurrentWeek();
  const next = cur >= 4 ? 1 : cur + 1;
  setCurrentWeek(next);
  return next;
}

export function regressWeek() {
  const cur = getCurrentWeek();
  const prev = cur <= 1 ? 4 : cur - 1;
  setCurrentWeek(prev);
  return prev;
}

// ── Progress Queries ──

export function getLogsForExercise(exerciseId) {
  return getLogs()
    .filter(l => l.exercises && l.exercises[exerciseId])
    .map(l => {
      const sets = l.exercises[exerciseId];
      const valid = sets.filter(s => s.reps && s.weight);
      if (valid.length === 0) return null;
      const maxWeight = Math.max(...valid.map(s => parseFloat(s.weight) || 0));
      const totalVolume = valid.reduce((sum, s) =>
        sum + (parseFloat(s.reps) || 0) * (parseFloat(s.weight) || 0), 0);
      const totalReps = valid.reduce((sum, s) => sum + (parseFloat(s.reps) || 0), 0);
      return {
        date: l.date,
        week: l.week,
        day: l.day,
        maxWeight,
        totalVolume: Math.round(totalVolume),
        totalReps
      };
    })
    .filter(Boolean);
}

export function getCompletedDays(weekNum) {
  return new Set(
    getLogs()
      .filter(l => l.week === weekNum)
      .map(l => l.day)
  );
}

// ── Export/Import (future-proofing) ──

export function exportAll() {
  return JSON.stringify({
    logs: getLogs(),
    week: getCurrentWeek(),
    exportedAt: new Date().toISOString()
  }, null, 2);
}

export function importAll(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (data.logs) saveLogs(data.logs);
    if (data.week) setCurrentWeek(data.week);
    return true;
  } catch (e) {
    console.error('Import failed:', e);
    return false;
  }
}
