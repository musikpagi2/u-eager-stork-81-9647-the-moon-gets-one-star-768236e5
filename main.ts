// The Moon Gets One Star — make.fun entry
// Writes a single one-star review of the Moon to /output/entry.txt.
// The review's grievance is a real, specific Moon fact: the Moon rises
// roughly 50 minutes later every single night.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "★☆☆☆☆ Rises 50 minutes later every single night and acts like that's normal. Zero time management. One star.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`Wrote ${[...REVIEW].length} characters to /output/entry.txt`);
