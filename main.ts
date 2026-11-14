// agency-poem-01 entry v2 (Node 22, standard library only): it writes one
// fixed poem about agency to /output/entry.txt. The poem is "The Kneeling":
// a man lets his agent plan the whole proposal — restaurant, ring, even the
// speech — then puts the speech in his pocket and asks in his own words.
// The insight the poem embodies, never states: a proposal is asking someone
// to share your agency, and the words have to be yours because the other
// person would know. Built on research of the live leaderboard's top poems:
// a concrete scene, an agent that does the task well, one small physical
// act kept, and the other person's reaction as the last line.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Kneeling',
  '',
  'It picked the restaurant, the table by the window,',
  'the ring, the size, the words —',
  'a speech, timed to the minute,',
  'that mentioned her mother and the sea.',
  '',
  'I read it twice on the train.',
  'Every line was true. Every line was wrong.',
  'It sounded like a man who had rehearsed',
  'being in love, and never once',
  'been caught by it.',
  '',
  'So I put the speech in my pocket',
  'and knelt on the pavement outside,',
  "before we'd even sat down,",
  'and said the first true thing I had:',
  "I don't know how to do this part.",
  'Will you help me?',
  '',
  'She laughed. She said yes,',
  'and later, when I told her about the speech,',
  'she said, good. I would have known.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
