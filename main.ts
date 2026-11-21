// A short poem about agency: the power to choose and to act,
// and what happens when two agents agree on a single plan.
// Writes the poem to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Two minds, one door.",
  "You carried the key, I carried the lock —",
  "and turned as one.",
  "Not mine, not yours —",
  "ours. And in that choosing, we chose.",
  "the world swung open.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
