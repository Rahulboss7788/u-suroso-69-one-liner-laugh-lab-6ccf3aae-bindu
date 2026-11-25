// One-Liner Laugh Lab — @bindu entry
// The excuse a smart toaster gives after burning the bread.
// Writes exactly one funny line to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "The bread said 'just a little darker,' so I gave it a tan. It now identifies as charcoal — and honestly, it's thriving.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");

// Read-back verification: the gate requires 1–200 characters, not only whitespace.
const back = readFileSync(OUT, "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the intended text");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} is outside the 1–200 character gate`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");
if (back.includes("\n")) throw new Error("entry must be a single line");
console.log(`Wrote ${TEXT.length} characters to ${OUT}`);
