// ─────────────── EXERCISE DATABASE ───────────────

export const EXERCISES = {
  "goblet-squat": {
    name: "Goblet Squat",
    pattern: "Squat",
    equipment: "Kettlebell or Dumbbell",
    muscles: "Quads, Glutes, Core",
    cues: [
      "Hold weight tight at chest, elbows pointing down",
      "Feet shoulder-width, toes turned out ~15°",
      "Sit back and down — hips below parallel if mobility allows",
      "Elbows track inside knees at the bottom",
      "Drive through full foot, squeeze glutes at top"
    ]
  },
  "incline-db-press": {
    name: "Incline Dumbbell Press",
    pattern: "Push",
    equipment: "Dumbbells + Incline Bench (30–45°)",
    muscles: "Chest (upper), Shoulders, Triceps",
    cues: [
      "Set bench to ~30–45° incline",
      "Start with dumbbells at shoulder height, palms forward",
      "Press up and slightly inward — don't clank at top",
      "Lower under control, feel a stretch at the bottom",
      "Feet flat on floor, slight arch in lower back is fine"
    ]
  },
  "db-romanian-deadlift": {
    name: "Dumbbell Romanian Deadlift",
    pattern: "Hinge",
    equipment: "Dumbbells",
    muscles: "Hamstrings, Glutes, Lower Back",
    cues: [
      "Hold dumbbells in front of thighs, soft knee bend",
      "Hinge at hips — push your butt BACK, not down",
      "Dumbbells stay close to legs the entire time",
      "Lower until you feel a deep hamstring stretch (mid-shin area)",
      "Squeeze glutes hard to stand back up — don't pull with lower back"
    ]
  },
  "pushups": {
    name: "Push-Ups",
    pattern: "Push",
    equipment: "Bodyweight",
    muscles: "Chest, Shoulders, Triceps, Core",
    cues: [
      "Hands just outside shoulder width",
      "Body is a straight plank — no sagging hips",
      "Lower chest to just above the floor",
      "Elbows at ~45° angle, not flared to 90°",
      "If needed: incline push-ups with hands on bench to build up"
    ]
  },
  "kb-swing": {
    name: "Kettlebell Swing",
    pattern: "Hinge",
    equipment: "Kettlebell (15 lb)",
    muscles: "Glutes, Hamstrings, Core, Shoulders",
    cues: [
      "Feet wider than shoulder-width, KB on floor in front",
      "Hike the KB back between legs like snapping a football",
      "SNAP hips forward explosively — arms are just along for the ride",
      "KB floats to chest height from hip power, NOT arm lifting",
      "Let it swing back, hinge, repeat — it's a hip hinge, not a squat"
    ]
  },
  "plank": {
    name: "Plank",
    pattern: "Core",
    equipment: "Bodyweight + Yoga Mat",
    muscles: "Core, Shoulders, Glutes",
    cues: [
      "Forearms on ground, elbows under shoulders",
      "Body is a straight line from head to heels",
      "Squeeze glutes, brace abs like bracing for a punch",
      "Don't let hips sag or pike up",
      "Breathe — don't hold your breath"
    ]
  },
  "db-row": {
    name: "Single-Arm Dumbbell Row",
    pattern: "Pull",
    equipment: "Dumbbell + Bench",
    muscles: "Lats, Rhomboids, Biceps, Rear Delts",
    cues: [
      "One hand and knee on bench, other foot on floor",
      "Keep back flat — like a table top",
      "Pull dumbbell to hip, not to shoulder",
      "Initiate by squeezing shoulder blade back first",
      "Lower under control — full stretch at bottom"
    ]
  },
  "bulgarian-split-squat": {
    name: "Bulgarian Split Squat",
    pattern: "Squat",
    equipment: "Dumbbells + Bench",
    muscles: "Quads, Glutes, Balance",
    cues: [
      "Rear foot elevated on bench behind you, laces down",
      "Front foot far enough forward that knee stays over ankle",
      "Lower straight down — front thigh to parallel",
      "Keep torso upright, core braced",
      "Drive through front heel to stand"
    ]
  },
  "db-floor-press": {
    name: "Dumbbell Floor Press",
    pattern: "Push",
    equipment: "Dumbbells + Yoga Mat",
    muscles: "Chest, Triceps, Shoulders",
    cues: [
      "Lie on floor, knees bent, feet flat",
      "Start with dumbbells pressed up over chest",
      "Lower until triceps gently touch the floor — pause",
      "Press back up explosively from the dead stop",
      "The floor limits range of motion — great for tricep focus"
    ]
  },
  "dead-bug": {
    name: "Dead Bug",
    pattern: "Core",
    equipment: "Bodyweight + Yoga Mat",
    muscles: "Deep Core, Hip Flexors",
    cues: [
      "Lie on back, arms straight up, knees at 90°",
      "Press lower back INTO the floor — no gap",
      "Slowly extend opposite arm and leg toward floor",
      "Only go as far as you can while keeping back flat",
      "Return to start, switch sides — slow and controlled"
    ]
  },
  "db-front-squat": {
    name: "Dumbbell Front Squat",
    pattern: "Squat",
    equipment: "Dumbbells",
    muscles: "Quads, Core, Upper Back",
    cues: [
      "Hold dumbbells at shoulder height, elbows high",
      "This demands more core and upper back than goblet squat",
      "Squat straight down, keeping torso as upright as possible",
      "Depth below parallel if you can",
      "Drive up through full foot"
    ]
  },
  "incline-db-row": {
    name: "Incline Dumbbell Row",
    pattern: "Pull",
    equipment: "Dumbbells + Incline Bench",
    muscles: "Upper Back, Rear Delts, Rhomboids",
    cues: [
      "Set bench to ~30° incline, lie chest-down on it",
      "Let arms hang straight down with dumbbells",
      "Pull both dumbbells up, squeezing shoulder blades together",
      "Hold the squeeze for a beat at the top",
      "Great for posture — counteracts desk slouch"
    ]
  },
  "db-overhead-press": {
    name: "Dumbbell Overhead Press",
    pattern: "Push",
    equipment: "Dumbbells (seated or standing)",
    muscles: "Shoulders, Triceps, Core",
    cues: [
      "Start with dumbbells at shoulder height, palms forward",
      "Press straight up — dumbbells converge slightly at top",
      "Lock out overhead, biceps near ears",
      "Lower under control back to shoulders",
      "Seated on bench removes leg drive — more strict shoulder work"
    ]
  },
  "db-reverse-lunge": {
    name: "Dumbbell Reverse Lunge",
    pattern: "Squat",
    equipment: "Dumbbells",
    muscles: "Quads, Glutes, Balance",
    cues: [
      "Hold dumbbells at sides, stand tall",
      "Step BACK with one foot (easier on knees than forward lunge)",
      "Lower until both knees at ~90°, back knee just above floor",
      "Push through front heel to return to standing",
      "Alternate legs or do all reps on one side then switch"
    ]
  },
  "kb-goblet-squat-combo": {
    name: "KB Swing → Goblet Squat Combo",
    pattern: "Full Body",
    equipment: "Kettlebell",
    muscles: "Full Body — Glutes, Quads, Core, Shoulders",
    cues: [
      "Perform a kettlebell swing",
      "On the next swing, catch the KB at the top in goblet position",
      "Immediately squat down into a goblet squat",
      "Stand up, swing KB back down into next swing",
      "This is a conditioning finisher — keep it smooth, not rushed"
    ]
  },
  "farmers-walk": {
    name: "Farmer's Walk",
    pattern: "Carry",
    equipment: "Dumbbells (heavy as possible)",
    muscles: "Grip, Traps, Core, Full Body Stability",
    cues: [
      "Pick up heaviest dumbbells you can hold",
      "Stand tall — shoulders back and down, chest up",
      "Walk with controlled steps, don't rush",
      "Squeeze the handles hard, keep core braced",
      "Walk for distance or time — this builds everything"
    ]
  }
};

// Movement pattern groupings for the exercise reference page
export const PATTERNS = ["Squat", "Push", "Pull", "Hinge", "Core", "Carry", "Full Body"];

// ─────────────── PROGRAM STRUCTURE ───────────────

export const PROGRAM = {
  days: {
    A: {
      name: "Push + Squat",
      focus: "Lower body squat pattern, upper push, posterior chain",
      exercises: [
        { id: "goblet-squat", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "incline-db-press", baseSets: 3, reps: "8–10", rest: "60–90s" },
        { id: "db-romanian-deadlift", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "pushups", baseSets: 3, reps: "AMRAP", rest: "60s", note: "As many reps as possible with good form" },
        { id: "kb-swing", baseSets: 3, reps: "15", rest: "45–60s" },
        { id: "plank", baseSets: 3, reps: "30–45s", rest: "30s", isCore: true }
      ]
    },
    B: {
      name: "Pull + Hinge",
      focus: "Posterior chain emphasis, upper pull, unilateral legs",
      exercises: [
        { id: "kb-swing", baseSets: 3, reps: "15–20", rest: "45–60s" },
        { id: "db-row", baseSets: 3, reps: "10–12 each", rest: "60–90s" },
        { id: "bulgarian-split-squat", baseSets: 3, reps: "8–10 each", rest: "60–90s" },
        { id: "db-floor-press", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "db-romanian-deadlift", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "dead-bug", baseSets: 3, reps: "10 each side", rest: "30s", isCore: true }
      ]
    },
    C: {
      name: "Full Body Mix",
      focus: "Variety, conditioning, overhead work, carries",
      exercises: [
        { id: "db-front-squat", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "incline-db-row", baseSets: 3, reps: "10–12", rest: "60–90s" },
        { id: "db-overhead-press", baseSets: 3, reps: "8–10", rest: "60–90s" },
        { id: "db-reverse-lunge", baseSets: 3, reps: "10 each", rest: "60–90s" },
        { id: "kb-goblet-squat-combo", baseSets: 3, reps: "10", rest: "60s" },
        { id: "farmers-walk", baseSets: 3, reps: "40 steps", rest: "45–60s", isCore: true }
      ]
    }
  },
  weeks: [
    { num: 1, name: "Foundation", note: "Learn movements, light weight, nail the form. Don't chase failure.", setsAdj: 0, tempo: null },
    { num: 2, name: "Build", note: "Add 1–2 reps per set or bump weight slightly where form is solid.", setsAdj: 0, tempo: null },
    { num: 3, name: "Push", note: "Add a 4th set on the first 3 exercises of each day. More volume.", setsAdj: 1, tempo: null },
    { num: 4, name: "Deload", note: "Back to 3 sets. Slow eccentrics (3-sec lowering). Recovery week.", setsAdj: 0, tempo: "3-second lowering on every rep" }
  ]
};

// Utility: get effective set count for an exercise in a given week
export function effectiveSets(exercise, weekNum) {
  const week = PROGRAM.weeks.find(w => w.num === weekNum) || PROGRAM.weeks[0];
  return exercise.isCore ? exercise.baseSets : exercise.baseSets + (week.setsAdj || 0);
}
