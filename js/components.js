// ─────────────── SHARED COMPONENTS ───────────────
// Renders HTML strings. No DOM manipulation — pages handle insertion.

import { EXERCISES, PROGRAM, effectiveSets } from './program.js';

// ── Navigation ──

export function navHTML(activePage) {
  const links = [
    { href: 'index.html', label: 'Schedule', key: 'schedule' },
    { href: 'pages/log.html', label: 'Log', key: 'log' },
    { href: 'pages/progress.html', label: 'Progress', key: 'progress' },
    { href: 'pages/exercises.html', label: 'Exercises', key: 'exercises' }
  ];

  // Adjust paths if we're in pages/ directory
  const inSubdir = window.location.pathname.includes('/pages/');

  return links.map(l => {
    let href = l.href;
    if (inSubdir) {
      href = l.key === 'schedule' ? '../index.html' : `./${l.label.toLowerCase()}.html`;
    }
    const active = l.key === activePage ? ' class="active"' : '';
    return `<a href="${href}"${active}>${l.label}</a>`;
  }).join('\n');
}

// ── Week Header ──

export function weekHeaderHTML(weekNum) {
  const week = PROGRAM.weeks.find(w => w.num === weekNum) || PROGRAM.weeks[0];
  let tempoTag = '';
  if (week.tempo) {
    tempoTag = `<span class="tempo-tag">⏱ ${week.tempo}</span>`;
  }
  return `
    <div class="week-header">
      <button class="week-arrow" id="week-prev">‹</button>
      <div class="week-info">
        <div class="week-title">Week ${week.num} — ${week.name}</div>
        <div class="week-note">${week.note} ${tempoTag}</div>
      </div>
      <button class="week-arrow" id="week-next">›</button>
    </div>
  `;
}

// ── Schedule Day Card ──

export function dayCardHTML(dayKey, weekNum, completed) {
  const day = PROGRAM.days[dayKey];
  if (!day) return '';

  const doneClass = completed ? ' day-done' : '';
  const doneTag = completed
    ? '<span class="done-tag">✓ DONE</span>'
    : `<a href="${startLogHref(dayKey)}" class="start-btn">START</a>`;

  const exerciseRows = day.exercises.map(ex => {
    const info = EXERCISES[ex.id] || {};
    const sets = effectiveSets(ex, weekNum);
    const coreTag = ex.isCore ? '<span class="core-tag">CORE</span>' : '';
    return `
      <div class="ex-row">
        <span class="ex-name">${coreTag}${info.name || ex.id}</span>
        <span class="ex-prescription">${sets} × ${ex.reps}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="day-card${doneClass}">
      <div class="day-card-header">
        <div>
          <span class="day-key">DAY ${dayKey}</span>
          <span class="day-name">${day.name.toUpperCase()}</span>
        </div>
        ${doneTag}
      </div>
      <div class="day-focus">${day.focus}</div>
      <div class="ex-list">${exerciseRows}</div>
    </div>
  `;
}

function startLogHref(dayKey) {
  const inSubdir = window.location.pathname.includes('/pages/');
  const base = inSubdir ? './log.html' : './pages/log.html';
  return `${base}?day=${dayKey}`;
}

// ── Exercise Reference Card ──

export function exerciseCardHTML(exerciseId) {
  const ex = EXERCISES[exerciseId];
  if (!ex) return '';

  const cueItems = ex.cues.map((cue, i) => `
    <div class="cue-item">
      <span class="cue-num">${i + 1}</span>
      <span class="cue-text">${cue}</span>
    </div>
  `).join('');

  return `
    <div class="exercise-detail">
      <h2 class="exercise-title">${ex.name}</h2>
      <div class="exercise-tags">
        <span class="tag">${ex.pattern}</span>
        <span class="tag">${ex.equipment}</span>
      </div>
      <div class="exercise-muscles"><strong>Targets:</strong> ${ex.muscles}</div>
      <div class="cue-header">FORM CUES</div>
      <div class="cue-list">${cueItems}</div>
    </div>
  `;
}

// ── Exercise List (grouped by pattern) ──

export function exerciseListHTML() {
  const groups = {};
  for (const [id, ex] of Object.entries(EXERCISES)) {
    const p = ex.pattern;
    if (!groups[p]) groups[p] = [];
    groups[p].push({ id, ...ex });
  }

  const patternOrder = ["Squat", "Push", "Pull", "Hinge", "Core", "Carry", "Full Body"];
  return patternOrder.map(pattern => {
    const items = groups[pattern];
    if (!items || items.length === 0) return '';
    const links = items.map(ex => `
      <a href="?exercise=${ex.id}" class="ex-link">
        <span>${ex.name}</span>
        <span class="ex-link-arrow">→</span>
      </a>
    `).join('');
    return `
      <div class="pattern-group">
        <div class="pattern-label">${pattern.toUpperCase()}</div>
        ${links}
      </div>
    `;
  }).join('');
}

// ── Log Form Row ──

export function logExerciseHTML(exercise, sets, weightLabel) {
  const info = EXERCISES[exercise.id] || {};
  const label = weightLabel || 'WEIGHT (lb)';

  const setRows = Array.from({ length: sets }, (_, i) => `
    <div class="log-set-row">
      <span class="log-set-num">${i + 1}</span>
      <input type="number" inputmode="numeric" class="log-input" placeholder="—"
        data-exercise="${exercise.id}" data-set="${i}" data-field="reps" />
      <input type="number" inputmode="numeric" class="log-input" placeholder="—"
        data-exercise="${exercise.id}" data-set="${i}" data-field="weight" />
    </div>
  `).join('');

  const cueItems = (info.cues || []).map((cue, i) => `
    <div class="log-cue-item">
      <span class="log-cue-num">${i + 1}</span>
      <span>${cue}</span>
    </div>
  `).join('');

  const noteHTML = exercise.note ? `<div class="log-ex-note">${exercise.note}</div>` : '';

  return `
    <div class="log-exercise" data-exercise-id="${exercise.id}">
      <div class="log-ex-header">
        <span class="log-ex-name">${info.name || exercise.id}</span>
        <span class="log-ex-target">Target: ${exercise.reps}</span>
      </div>
      ${noteHTML}
      <button class="log-cue-toggle" data-toggle="${exercise.id}">
        <span class="log-cue-toggle-icon">▸</span>
        <span>Form cues</span>
        <span class="log-cue-toggle-meta">${info.muscles || ''}</span>
      </button>
      <div class="log-cue-panel" id="cues-${exercise.id}" data-expanded="false">
        <div class="log-cue-tags">
          <span class="tag">${info.pattern || ''}</span>
          <span class="tag">${info.equipment || ''}</span>
        </div>
        ${cueItems}
      </div>
      <div class="log-set-labels">
        <span class="log-label-set">SET</span>
        <span class="log-label-field">REPS</span>
        <span class="log-label-field">${label}</span>
      </div>
      ${setRows}
    </div>
  `;
}

// ── Utility ──

export function todayFormatted() {
  return new Date().toISOString().split('T')[0];
}
