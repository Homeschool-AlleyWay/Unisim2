// EXAMPLE: how to wire in extra curriculum without touching engine code.
//
// 1. Copy this file (e.g. `myPack.ts`) in this same folder.
// 2. Fill in one or more `Lesson` objects — a Lesson can override an
//    existing grade+subject (same `id`) or be a brand-new elective.
// 3. Import and call `registerCurriculumPack` once, e.g. from
//    `src/game/SchoolGame.ts` near the top:
//
//      import { installMyPack } from './data/curriculumPacks/myPack';
//      installMyPack();
//
// That's the whole integration surface — no other file needs to change.
import { registerCurriculumPack, Lesson } from '../curriculum';

const EXAMPLE_LESSONS: Lesson[] = [
  {
    id: 'g5-math-fractions-alt', // a different id => an *additional* lesson,
    grade: 5,
    subject: 'math',
    title: 'Fractions on a Number Line (extra practice)',
    standard: 'CCSS.MATH.CONTENT.5.NF.A.1',
    board: ['Fractions on a Number Line', 'Mark 1/4, 1/2, 3/4', 'Extra practice set'],
    textbook: {
      heading: 'Extra Practice: Fractions on a Number Line',
      intro: 'You can plot fractions on a number line just like whole numbers, by splitting the space between 0 and 1 into equal parts.',
      didYouKnow: 'Did you know? Number lines were popularized as a teaching tool in the 1700s.',
      vocab: [{ term: 'Interval', def: 'The equal space between two marks on a number line.' }],
      sideNote: 'This is a bonus pack lesson — proof the curriculum system is pluggable!',
    },
    popQuiz: Array.from({ length: 5 }, (_, i) => ({ q: `Extra Q${i + 1}: where does 1/2 sit on a 0-1 number line?`, choices: ['At the start', 'Exactly in the middle', 'At the end', 'Off the line'], correct: 1 })),
    test: [],
  },
];

export function installExamplePack() {
  registerCurriculumPack({ lessons: EXAMPLE_LESSONS });
}
