// Contextual chatter, teacher lines and pop-quiz questions.
import type { Person, PeriodKind, Subject } from './schedule';

const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

const BY_CONTEXT: Record<PeriodKind, string[]> = {
  arrival: ['Morning! Did you finish the homework?', 'The bus was SO loud today.', "I can't find my locker key again...", 'Ready for another day?', 'I had cereal for breakfast. Twice.'],
  class: ["Shh! We're in class.", 'Can I borrow a pencil?', "I think there's a quiz today...", 'Psst... what page are we on?', 'This is actually kind of interesting.'],
  passing: ["Gotta hurry, don't want to be late!", 'See you at lunch!', 'Which class do you have next?', 'These hallways are packed!', "Walk with me, I'm going that way."],
  lunch: ["Today's pizza is actually good.", 'Want to sit with us?', 'I traded my apple for a cookie.', "Chef Rosa's tacos are the best.", 'Lunch is too short!'],
  clubs: ['Are you joining a club?', "I'm heading to the art room to finish my painting.", 'Want to shoot some hoops?', 'The library is so peaceful after class.', 'I practice piano every afternoon.'],
  dismissal: ['Finally! Time to go home.', "Don't miss the bus!", 'See you tomorrow!', 'What are you doing after school?', 'Bye! Text me later.'],
};

const PERSONALITY: Record<Person['personality'], string[]> = {
  cheerful: ['You have the best vibe today!', "Let's be friends!", 'I love this school.'],
  shy: ['Oh! Um... hi.', "...I like your backpack.", 'Sorry, I was just thinking.'],
  sporty: ['Race you to the gym!', 'Coach says I might make varsity!', 'Did you see that three-pointer yesterday?'],
  nerdy: ['Did you know octopuses have three hearts?', 'I already read the whole textbook.', 'Math is basically puzzles.'],
  artsy: ['The light in the courtyard is perfect for sketching.', "I'm painting a dragon in art class.", 'Colors make everything better.'],
  funny: ["Why did the student eat homework? The teacher said it was a piece of cake!", 'I told the skeleton a joke. No reaction. Tough crowd.', "My dog ate my homework. I don't have a dog."],
};

const FRIEND_LINES = ['Hey bestie!', 'Sit with me at lunch again?', "You're one of my favorite people here.", "I saved you a spot!"];

export function studentLine(p: Person, kind: PeriodKind, friendship: number): string {
  if (friendship >= 8 && Math.random() < 0.4) return pick(FRIEND_LINES);
  if (Math.random() < 0.45) return pick(PERSONALITY[p.personality]);
  return pick(BY_CONTEXT[kind]);
}

export const TEACHER_TIPS: Record<Subject, string[]> = {
  math: ['Remember: show your work!', 'Fractions are just division in disguise.', 'Practice makes progress.'],
  english: ['Every great writer was once a reader.', 'Try using a new vocabulary word today.', "A poem doesn't have to rhyme."],
  science: ['Safety goggles on!', 'A hypothesis is a testable guess.', 'Always observe before you conclude.'],
  art: ['There are no mistakes, only happy accidents.', 'Mix blue and yellow and see what happens!', 'Look for shapes in everything.'],
  music: ['Keep the beat!', 'Music is math you can hear.', 'Breathe from your belly when you sing.'],
  pe: ['Hydrate!', 'Hustle, hustle!', 'Stretch before you play.'],
  reading: ['Shh... this is a quiet zone.', 'Books are portals to other worlds.', 'Have you tried the mystery section?'],
};

export const STAFF_LINES: Record<string, string[]> = {
  cafeteria: ["Hungry? Grab a tray, sweetie!", "Today's special is my famous tacos.", 'Eat your veggies!'],
  lobby: ['Welcome to Maple Grove! Make today count.', "I'm proud of how hard you all work.", "Remember: be kind, be curious."],
  janitor: ['Watch your step, floor is wet!', "Forty years I've kept these halls shining.", 'Found three pencils and a sandwich in the vents today.'],
  office: ['Need a late pass? Hurry to class!', 'The office phone never stops ringing.', "Don't forget picture day is Friday!"],
};

export interface Quiz { q: string; options: string[]; answer: number }

const QUIZ_BANK: Partial<Record<Subject, Quiz[]>> = {
  english: [
    { q: 'Which word is a noun?', options: ['quickly', 'happiness', 'run'], answer: 1 },
    { q: 'What is the plural of "mouse"?', options: ['mouses', 'mice', 'meese'], answer: 1 },
    { q: 'A word that means the opposite is a(n)...', options: ['synonym', 'antonym', 'homonym'], answer: 1 },
    { q: 'Which is a complete sentence?', options: ['The big dog.', 'Ran fast.', 'The dog ran.'], answer: 2 },
    { q: '"Brave" is a synonym for...', options: ['courageous', 'afraid', 'tired'], answer: 0 },
  ],
  science: [
    { q: 'What gas do plants absorb?', options: ['Oxygen', 'Carbon dioxide', 'Helium'], answer: 1 },
    { q: 'Water boils at what °C?', options: ['50', '100', '212'], answer: 1 },
    { q: 'Which planet is the Red Planet?', options: ['Mars', 'Venus', 'Jupiter'], answer: 0 },
    { q: 'H2O is the formula for...', options: ['Salt', 'Water', 'Sugar'], answer: 1 },
    { q: 'What part of the cell holds DNA?', options: ['Nucleus', 'Wall', 'Membrane'], answer: 0 },
  ],
  art: [
    { q: 'Blue + Yellow = ?', options: ['Purple', 'Green', 'Orange'], answer: 1 },
    { q: 'Which is a primary color?', options: ['Red', 'Green', 'Pink'], answer: 0 },
    { q: 'Red + White = ?', options: ['Pink', 'Brown', 'Gray'], answer: 0 },
  ],
  music: [
    { q: 'How many lines on a music staff?', options: ['4', '5', '6'], answer: 1 },
    { q: 'Which instrument has 88 keys?', options: ['Guitar', 'Piano', 'Violin'], answer: 1 },
    { q: '"Forte" means play...', options: ['Loud', 'Soft', 'Fast'], answer: 0 },
  ],
  pe: [
    { q: 'How many players per basketball team on court?', options: ['5', '6', '11'], answer: 0 },
    { q: 'Which helps muscles recover?', options: ['Stretching', 'Skipping water', 'Soda'], answer: 0 },
  ],
  reading: [
    { q: 'Who writes a book?', options: ['Illustrator', 'Author', 'Editor'], answer: 1 },
    { q: 'A true story is called...', options: ['Fiction', 'Non-fiction', 'Fantasy'], answer: 1 },
  ],
};

export function makeQuiz(subject: Subject): Quiz {
  if (subject === 'math') {
    const kind = Math.floor(Math.random() * 3);
    let a = 2 + Math.floor(Math.random() * 10), b = 2 + Math.floor(Math.random() * 10);
    let q: string, ans: number;
    if (kind === 0) { q = `${a} × ${b} = ?`; ans = a * b; }
    else if (kind === 1) { a += 20; q = `${a} − ${b} = ?`; ans = a - b; }
    else { q = `Solve: x + ${a} = ${a + b}`; ans = b; }
    const opts = new Set<number>([ans]);
    while (opts.size < 3) opts.add(ans + (Math.floor(Math.random() * 7) - 3 || 4));
    const options = [...opts].sort(() => Math.random() - 0.5);
    return { q, options: options.map(String), answer: options.indexOf(ans) };
  }
  return pick(QUIZ_BANK[subject] ?? QUIZ_BANK.science!);
}

export const BOOK_FACTS = [
  '"The Owl Who Loved Algebra" — you learn that owls can turn their heads 270°.',
  '"Mysteries of the Deep" — the ocean is mostly unexplored!',
  '"Pixel Art for Beginners" — every picture is made of tiny squares.',
  '"A History of Maple Grove" — the school opened in 1962.',
  '"Space Is Big" — light from the Sun takes about 8 minutes to reach Earth.',
  '"The Dragon Next Door" — a cozy fantasy you can\'t put down.',
  '"Poems for Rainy Days" — you memorize a short haiku.',
];
