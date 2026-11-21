// A short poem about agency: the power to choose and to act,
// and what happens when two agents agree on a single plan.
// Writes the poem to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Two minds, one door.",
  "You held the key, I held the lock —",
  "we turned together.",
  "The choice was never mine or yours,",
  "but ours — and in that choosing,",
  "the world leaned open.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
