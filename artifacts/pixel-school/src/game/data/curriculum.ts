// Grade-by-grade, subject-by-subject curriculum framework.
//
// Design goals:
//  - Covers all 12 grades so every player (any grade) always has real,
//    level-appropriate content to see on the board/in their textbook.
//  - Each lesson is tagged with a real-style national-standard code
//    (Common Core for math/ELA, NGSS for science) so the "matches national
//    standards" requirement is structural, not just flavor text.
//  - A handful of grades/subjects are hand-authored in full depth (board
//    content, 90s-style textbook page, 5-question pop quiz bank, and a
//    longer unit test) as the flagship sample. Every other grade/subject
//    still gets a real, correctly-leveled topic list and a lesson built
//    from it automatically, so nothing is ever blank.
//  - `registerCurriculumPack` lets new content (an elective, a whole grade,
//    a home-brew unit) be wired in from a separate module with zero engine
//    changes — see src/game/data/curriculumPacks/example.ts.

import { Subject, SUBJECTS } from './schedule';
export type { Subject };
export { SUBJECTS };

export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const GRADES: Grade[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export interface Question { q: string; choices: string[]; correct: number }

export interface TextbookPage {
  heading: string;
  intro: string;
  didYouKnow: string;
  vocab: { term: string; def: string }[];
  sideNote: string;
}

export interface Lesson {
  id: string; // stable id, e.g. "g5-math-fractions"
  grade: Grade;
  subject: Subject;
  title: string;
  standard: string; // e.g. "CCSS.MATH.CONTENT.5.NF.A.1"
  board: string[]; // lines shown on the live chalkboard
  textbook: TextbookPage;
  popQuiz: Question[]; // exactly 5, used for in-class pop quizzes
  test: Question[]; // longer unit test bank
}

/** Real-ish, standards-flavored topic outline for every grade x subject, used
 *  to auto-build a serviceable lesson for anything not hand-authored below. */
const TOPIC_OUTLINE: Record<Grade, Record<Subject, { title: string; standard: string }[]>> = {
  1: {
    math: [{ title: 'Addition within 20', standard: 'CCSS.MATH.CONTENT.1.OA.A.1' }],
    english: [{ title: 'Beginning sounds & sight words', standard: 'CCSS.ELA-LITERACY.RF.1.3' }],
    science: [{ title: 'Weather and seasons', standard: 'NGSS.1-ESS1-1' }],
    art: [{ title: 'Primary colors', standard: 'NCAS.VA:Cr1.1.1a' }],
    music: [{ title: 'Steady beat', standard: 'NCAS.MU:Pr4.2.1a' }],
    pe: [{ title: 'Locomotor movement', standard: 'SHAPE.S1.E1.1' }],
    reading: [{ title: 'Story elements: who, what, where', standard: 'CCSS.ELA-LITERACY.RL.1.1' }],
  },
  2: {
    math: [{ title: 'Adding & Subtracting Big Numbers', standard: 'CCSS.MATH.CONTENT.2.NBT.B.5' }],
    english: [{ title: 'Nouns and Verbs', standard: 'CCSS.ELA-LITERACY.L.2.1' }],
    science: [{ title: 'Life Cycles', standard: 'NGSS.2-LS2-1' }],
    art: [{ title: 'Shapes in Art', standard: 'NCAS.VA:Cr1.2.2a' }],
    music: [{ title: 'High and Low Sounds', standard: 'NCAS.MU:Re7.1.2a' }],
    pe: [{ title: 'Throwing & Catching', standard: 'SHAPE.S1.E13.2' }],
    reading: [{ title: 'Main Idea & Details', standard: 'CCSS.ELA-LITERACY.RI.2.2' }],
  },
  3: {
    math: [{ title: 'Multiplication & Fractions', standard: 'CCSS.MATH.CONTENT.3.OA.A.1' }],
    english: [{ title: 'Paragraph Writing', standard: 'CCSS.ELA-LITERACY.W.3.1' }],
    science: [{ title: 'Forces and Motion', standard: 'NGSS.3-PS2-1' }],
    art: [{ title: 'Texture & Pattern', standard: 'NCAS.VA:Cr2.3.3a' }],
    music: [{ title: 'Reading Simple Rhythms', standard: 'NCAS.MU:Pr4.2.3a' }],
    pe: [{ title: 'Team Sports Basics', standard: 'SHAPE.S1.E24.3' }],
    reading: [{ title: 'Comparing Characters', standard: 'CCSS.ELA-LITERACY.RL.3.3' }],
  },
  4: {
    math: [{ title: 'Multi-digit Multiplication', standard: 'CCSS.MATH.CONTENT.4.NBT.B.5' }],
    english: [{ title: 'Persuasive Writing', standard: 'CCSS.ELA-LITERACY.W.4.1' }],
    science: [{ title: 'Energy Transfer', standard: 'NGSS.4-PS3-2' }],
    art: [{ title: 'Perspective Basics', standard: 'NCAS.VA:Cr1.1.4a' }],
    music: [{ title: 'Reading Notation', standard: 'NCAS.MU:Pr4.2.4a' }],
    pe: [{ title: 'Fitness & Endurance', standard: 'SHAPE.S3.E3.4' }],
    reading: [{ title: 'Theme in Fiction', standard: 'CCSS.ELA-LITERACY.RL.4.2' }],
  },
  5: {
    math: [{ title: 'Fractions', standard: 'CCSS.MATH.CONTENT.5.NF.A.1' }],
    english: [{ title: 'Narrative Writing', standard: 'CCSS.ELA-LITERACY.W.5.3' }],
    science: [{ title: 'The Water Cycle', standard: 'NGSS.5-ESS2-1' }],
    art: [{ title: 'Color Theory', standard: 'NCAS.VA:Cr2.1.5a' }],
    music: [{ title: 'Melody & Harmony', standard: 'NCAS.MU:Cr1.1.5a' }],
    pe: [{ title: 'Sportsmanship & Rules', standard: 'SHAPE.S4.E5.5' }],
    reading: [{ title: "Author's Purpose", standard: 'CCSS.ELA-LITERACY.RI.5.6' }],
  },
  6: {
    math: [{ title: 'Ratios & Proportions', standard: 'CCSS.MATH.CONTENT.6.RP.A.1' }],
    english: [{ title: 'Argument Writing', standard: 'CCSS.ELA-LITERACY.W.6.1' }],
    science: [{ title: 'Cells & Organisms', standard: 'NGSS.MS-LS1-1' }],
    art: [{ title: 'Composition & Balance', standard: 'NCAS.VA:Cr2.1.6a' }],
    music: [{ title: 'Chords & Scales', standard: 'NCAS.MU:Cr1.1.6a' }],
    pe: [{ title: 'Personal Fitness Plans', standard: 'SHAPE.S3.E1.6' }],
    reading: [{ title: 'Analyzing Nonfiction', standard: 'CCSS.ELA-LITERACY.RI.6.5' }],
  },
  7: {
    math: [{ title: 'Linear Equations', standard: 'CCSS.MATH.CONTENT.7.EE.B.4' }],
    english: [{ title: 'Analyzing Theme', standard: 'CCSS.ELA-LITERACY.RL.7.2' }],
    science: [{ title: 'Ecosystems', standard: 'NGSS.MS-LS2-1' }],
    art: [{ title: 'Mixed Media', standard: 'NCAS.VA:Cr2.3.7a' }],
    music: [{ title: 'Composing Short Pieces', standard: 'NCAS.MU:Cr2.1.7a' }],
    pe: [{ title: 'Strategy in Team Sports', standard: 'SHAPE.S2.E1.7' }],
    reading: [{ title: "Evaluating Author's Argument", standard: 'CCSS.ELA-LITERACY.RI.7.8' }],
  },
  8: {
    math: [{ title: 'Functions & Slope', standard: 'CCSS.MATH.CONTENT.8.F.A.1' }],
    english: [{ title: 'Research Writing', standard: 'CCSS.ELA-LITERACY.W.8.7' }],
    science: [{ title: 'Chemical Reactions', standard: 'NGSS.MS-PS1-2' }],
    art: [{ title: 'Personal Style', standard: 'NCAS.VA:Cr3.1.8a' }],
    music: [{ title: 'Music History Basics', standard: 'NCAS.MU:Re9.1.8a' }],
    pe: [{ title: 'Health & Nutrition', standard: 'SHAPE.S3.E2.8' }],
    reading: [{ title: 'Comparing Perspectives', standard: 'CCSS.ELA-LITERACY.RI.8.6' }],
  },
  9: {
    math: [{ title: 'Algebra I: Quadratics', standard: 'CCSS.MATH.CONTENT.HSA.REI.B.4' }],
    english: [{ title: 'Rhetorical Analysis', standard: 'CCSS.ELA-LITERACY.RI.9-10.6' }],
    science: [{ title: 'Biology: Genetics', standard: 'NGSS.HS-LS3-1' }],
    art: [{ title: 'Studio Portfolio Basics', standard: 'NCAS.VA:Cr3.1.Ia' }],
    music: [{ title: 'Music Theory I', standard: 'NCAS.MU:Cr1.1.Ia' }],
    pe: [{ title: 'Lifelong Fitness', standard: 'SHAPE.S3.H1.9' }],
    reading: [{ title: 'Close Reading: Classic Lit', standard: 'CCSS.ELA-LITERACY.RL.9-10.1' }],
  },
  10: {
    math: [{ title: 'Geometry: Proofs', standard: 'CCSS.MATH.CONTENT.HSG.CO.C.9' }],
    english: [{ title: 'World Literature', standard: 'CCSS.ELA-LITERACY.RL.9-10.9' }],
    science: [{ title: 'Chemistry: Bonding', standard: 'NGSS.HS-PS1-2' }],
    art: [{ title: 'Digital Art Techniques', standard: 'NCAS.VA:Cr2.1.IIa' }],
    music: [{ title: 'Ensemble Performance', standard: 'NCAS.MU:Pr6.1.IIa' }],
    pe: [{ title: 'Advanced Team Strategy', standard: 'SHAPE.S2.H2.10' }],
    reading: [{ title: 'Analyzing Rhetoric', standard: 'CCSS.ELA-LITERACY.RI.9-10.8' }],
  },
  11: {
    math: [{ title: 'Algebra II: Logarithms', standard: 'CCSS.MATH.CONTENT.HSF.LE.A.4' }],
    english: [{ title: 'American Literature', standard: 'CCSS.ELA-LITERACY.RL.11-12.9' }],
    science: [{ title: 'Physics: Motion & Forces', standard: 'NGSS.HS-PS2-1' }],
    art: [{ title: 'Advanced Portfolio Work', standard: 'NCAS.VA:Cr3.1.IIIa' }],
    music: [{ title: 'Music Theory II', standard: 'NCAS.MU:Cr1.1.IIIa' }],
    pe: [{ title: "Kinesiology Basics", standard: 'SHAPE.S3.H4.11' }],
    reading: [{ title: 'Critical Literary Theory', standard: 'CCSS.ELA-LITERACY.RL.11-12.2' }],
  },
  12: {
    math: [{ title: 'Pre-Calculus: Trigonometry', standard: 'CCSS.MATH.CONTENT.HSF.TF.A.2' }],
    english: [{ title: 'College Composition', standard: 'CCSS.ELA-LITERACY.W.11-12.1' }],
    science: [{ title: 'Environmental Science', standard: 'NGSS.HS-ESS3-4' }],
    art: [{ title: 'Capstone Portfolio', standard: 'NCAS.VA:Cr3.1.IVa' }],
    music: [{ title: 'Composition Capstone', standard: 'NCAS.MU:Cr2.1.IVa' }],
    pe: [{ title: 'Lifetime Wellness Planning', standard: 'SHAPE.S3.H5.12' }],
    reading: [{ title: 'Independent Literary Analysis', standard: 'CCSS.ELA-LITERACY.RL.11-12.1' }],
  },
};

/** Hand-authored, fully-detailed flagship lessons (90s-textbook style). */
const AUTHORED: Lesson[] = [
  {
    id: 'g5-math-fractions',
    grade: 5,
    subject: 'math',
    title: 'Fractions',
    standard: 'CCSS.MATH.CONTENT.5.NF.A.1',
    board: ['Adding Fractions', '1/4 + 1/2 = ?', 'Find a common denominator!', 'Homework: p.58 #1-10'],
    textbook: {
      heading: 'Chapter 5: Fractions Are Fun!',
      intro: 'A fraction shows part of a whole. The bottom number (denominator) tells how many equal pieces, and the top number (numerator) tells how many pieces you have.',
      didYouKnow: 'Did you know? The oldest known fractions come from ancient Egypt, over 4,000 years ago — they mostly used "unit fractions" like 1/2, 1/3, and 1/4!',
      vocab: [
        { term: 'Numerator', def: 'The top number in a fraction — how many parts you have.' },
        { term: 'Denominator', def: 'The bottom number in a fraction — how many equal parts make a whole.' },
        { term: 'Common denominator', def: 'A shared bottom number that lets you add or compare fractions.' },
      ],
      sideNote: '✏️ Side note: To add fractions with different denominators, find the smallest number both denominators divide into evenly — that’s the LCD (Least Common Denominator).',
    },
    popQuiz: [
      { q: 'What is 1/4 + 1/4?', choices: ['1/2', '2/8', '1/8', '2/4 + 1'], correct: 0 },
      { q: 'What is the denominator in 3/7?', choices: ['3', '7', '10', '4'], correct: 1 },
      { q: 'Which fraction is equivalent to 1/2?', choices: ['2/5', '2/4', '3/5', '1/3'], correct: 1 },
      { q: 'What is 2/3 + 1/3?', choices: ['3/6', '1', '3/3', 'Both B and C'], correct: 3 },
      { q: 'Which is larger, 1/3 or 1/4?', choices: ['1/3', '1/4', 'They are equal', 'Cannot tell'], correct: 0 },
    ],
    test: [
      { q: 'What is 1/2 + 1/3?', choices: ['2/5', '5/6', '1/6', '2/6'], correct: 1 },
      { q: 'Simplify 4/8.', choices: ['1/2', '2/4', '4/8', '1/4'], correct: 0 },
      { q: 'What is 3/4 - 1/4?', choices: ['2/4', '1/2', 'Both A and B', '2/8'], correct: 2 },
      { q: 'Which is the common denominator of 1/3 and 1/6?', choices: ['3', '6', '9', '18'], correct: 1 },
      { q: 'What is 2/5 of 20?', choices: ['4', '8', '10', '12'], correct: 1 },
      { q: 'Order from smallest to largest: 1/2, 1/8, 1/4', choices: ['1/2, 1/4, 1/8', '1/8, 1/4, 1/2', '1/4, 1/8, 1/2', '1/8, 1/2, 1/4'], correct: 1 },
      { q: 'What is 1 - 3/8?', choices: ['5/8', '3/8', '4/8', '2/8'], correct: 0 },
    ],
  },
  {
    id: 'g5-science-water-cycle',
    grade: 5,
    subject: 'science',
    title: 'The Water Cycle',
    standard: 'NGSS.5-ESS2-1',
    board: ['The Water Cycle', 'evaporation → condensation', '→ precipitation → collection', 'Goggles on for lab!'],
    textbook: {
      heading: 'Chapter 3: Earth’s Water Cycle',
      intro: 'Water is always moving between the ocean, the sky, and the land. This never-ending journey is called the water cycle.',
      didYouKnow: 'Did you know? The water you drink today could contain the very same molecules dinosaurs drank millions of years ago — water just keeps recycling!',
      vocab: [
        { term: 'Evaporation', def: 'When the sun heats water and turns it into vapor that rises into the air.' },
        { term: 'Condensation', def: 'When water vapor cools and turns back into tiny liquid droplets, forming clouds.' },
        { term: 'Precipitation', def: 'Water falling from clouds as rain, snow, sleet, or hail.' },
      ],
      sideNote: '🧪 Lab safety: always wear your goggles when working with the water-cycle terrarium model!',
    },
    popQuiz: [
      { q: 'What happens during evaporation?', choices: ['Water falls as rain', 'Liquid water turns to vapor', 'Vapor turns to liquid', 'Water freezes'], correct: 1 },
      { q: 'Clouds form during which stage?', choices: ['Evaporation', 'Condensation', 'Collection', 'Precipitation'], correct: 1 },
      { q: 'Which of these is a form of precipitation?', choices: ['Fog', 'Snow', 'Steam', 'Dew'], correct: 1 },
      { q: 'Where does collected water often end up?', choices: ['Oceans and lakes', 'Outer space', 'The sun', 'Nowhere'], correct: 0 },
      { q: 'What powers the water cycle?', choices: ['The moon', 'Wind alone', 'The sun’s heat', 'Ocean currents alone'], correct: 2 },
    ],
    test: [
      { q: 'Put the water cycle stages in order: precipitation, evaporation, condensation, collection.', choices: ['Evaporation, condensation, precipitation, collection', 'Condensation, evaporation, collection, precipitation', 'Collection, precipitation, evaporation, condensation', 'Precipitation, collection, evaporation, condensation'], correct: 0 },
      { q: 'What is the main energy source for the water cycle?', choices: ['Geothermal heat', 'The sun', 'Wind turbines', 'Volcanoes'], correct: 1 },
      { q: 'True or false: water is destroyed and remade during the cycle.', choices: ['True', 'False'], correct: 1 },
      { q: 'Which body absorbs the most evaporated water?', choices: ['Oceans', 'Deserts', 'Mountains', 'Cities'], correct: 0 },
      { q: 'Fog is closest to which process?', choices: ['Precipitation', 'Condensation near the ground', 'Collection', 'Evaporation only'], correct: 1 },
    ],
  },
  {
    id: 'g5-english-narrative',
    grade: 5,
    subject: 'english',
    title: 'Narrative Writing',
    standard: 'CCSS.ELA-LITERACY.W.5.3',
    board: ['Narrative Writing', 'Beginning → Middle → End', 'Use sensory details!', 'Draft due Friday'],
    textbook: {
      heading: 'Unit 4: Telling a Story',
      intro: 'A narrative tells a story with a clear beginning, middle, and end. Strong narratives use vivid details so the reader can picture what’s happening.',
      didYouKnow: 'Did you know? "Once upon a time" has been used to open fairy tales in English since at least the 1300s!',
      vocab: [
        { term: 'Plot', def: 'The sequence of events in a story.' },
        { term: 'Sensory details', def: 'Descriptions that appeal to sight, sound, smell, taste, or touch.' },
        { term: 'Dialogue', def: 'The words characters speak to each other in a story.' },
      ],
      sideNote: '📝 Side note: Try starting your story in the middle of the action — it’s called an "in medias res" opening!',
    },
    popQuiz: [
      { q: 'What are the three main parts of a narrative?', choices: ['Title, author, date', 'Beginning, middle, end', 'Question, answer, summary', 'Fact, opinion, claim'], correct: 1 },
      { q: 'What is dialogue?', choices: ['Character descriptions', 'Words characters speak', 'The setting', 'The moral of the story'], correct: 1 },
      { q: 'Sensory details help the reader...', choices: ['Skip the story', 'Picture the scene', 'Find the glossary', 'Ignore the plot'], correct: 1 },
      { q: 'What is the plot?', choices: ['The illustrations', 'The sequence of events', 'The author’s name', 'The page count'], correct: 1 },
      { q: 'A strong narrative ending should...', choices: ['Introduce a new character', 'Resolve the story', 'Restate the title', 'Ask a math question'], correct: 1 },
    ],
    test: [
      { q: 'Which sentence uses a sensory detail?', choices: ['She walked to school.', 'The crisp autumn air smelled like woodsmoke.', 'It was Monday.', 'She has a backpack.'], correct: 1 },
      { q: 'What does "in medias res" mean?', choices: ['Starting at the very beginning', 'Starting in the middle of the action', 'Ending with a question', 'Writing only dialogue'], correct: 1 },
      { q: 'A character’s spoken words are shown using...', choices: ['Italics only', 'Quotation marks', 'Parentheses', 'All capital letters'], correct: 1 },
      { q: 'What comes right after the beginning in a narrative arc?', choices: ['The resolution', 'The rising action / middle', 'The title page', 'The glossary'], correct: 1 },
      { q: 'Why do writers use vivid verbs?', choices: ['To confuse the reader', 'To make writing more exciting and clear', 'To make the story shorter', 'To avoid using nouns'], correct: 1 },
    ],
  },
];

const registry = new Map<string, Lesson>();
for (const l of AUTHORED) registry.set(l.id, l);

function fallbackLesson(grade: Grade, subject: Subject): Lesson {
  const topic = TOPIC_OUTLINE[grade][subject][0];
  const name = SUBJECTS[subject].name;
  return {
    id: `g${grade}-${subject}-auto`,
    grade,
    subject,
    title: topic.title,
    standard: topic.standard,
    board: [topic.title, `Grade ${grade} · ${name}`, `Standard: ${topic.standard}`, 'Take notes — pop quiz possible!'],
    textbook: {
      heading: `Grade ${grade} ${name}: ${topic.title}`,
      intro: `This unit covers "${topic.title}", a grade ${grade} ${name.toLowerCase()} topic aligned to standard ${topic.standard}.`,
      didYouKnow: `Did you know? ${name} teachers build this unit around ${topic.title.toLowerCase()} to prepare you for the next grade level.`,
      vocab: [{ term: topic.title.split(' ')[0], def: `A key idea in this unit: ${topic.title}.` }],
      sideNote: `📚 Side note: ask your teacher for extra practice on ${topic.title.toLowerCase()} if you want a challenge.`,
    },
    popQuiz: Array.from({ length: 5 }, (_, i) => ({
      q: `Quick check ${i + 1}: which best relates to "${topic.title}"?`,
      choices: [topic.title, 'A unrelated topic', 'Recess rules', 'The lunch menu'],
      correct: 0,
    })),
    test: Array.from({ length: 6 }, (_, i) => ({
      q: `Unit test ${i + 1}: explain a key part of "${topic.title}".`,
      choices: [topic.title, 'A unrelated topic', 'Recess rules', 'The lunch menu'],
      correct: 0,
    })),
  };
}

/** Get today's lesson for a grade+subject (stable per grade/subject for now;
 *  a real rotation could pick by day-of-year % outline.length). */
export function getLesson(grade: Grade, subject: Subject): Lesson {
  const authored = AUTHORED.find((l) => l.grade === grade && l.subject === subject);
  return authored ?? fallbackLesson(grade, subject);
}

/** Extension point: drop-in packs (extra electives, deeper grade content,
 *  a homeschool co-op's own unit) register themselves here with zero
 *  changes to the engine. See data/curriculumPacks/example.ts. */
export interface CurriculumPack { lessons: Lesson[] }
export function registerCurriculumPack(pack: CurriculumPack) {
  for (const l of pack.lessons) registry.set(l.id, l);
}
export function getRegisteredLesson(id: string): Lesson | undefined {
  return registry.get(id);
}
