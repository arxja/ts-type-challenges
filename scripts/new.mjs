#!/usr/bin/env bun
import { input, select } from "@inquirer/prompts";
import pc from "picocolors";
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const RAW_BASE =
  "https://raw.githubusercontent.com/type-challenges/type-challenges/main/questions";

async function fetchRaw(folder, file) {
  const url = `${RAW_BASE}/${folder}/${file}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${file} for ${folder}: ${res.status} ${res.statusText}`,
    );
  }
  return res.text();
}

async function main() {
  console.log(pc.bold(pc.cyan("\n✨ New Type Challenge Setup\n")));

  // 1. Gather challenge metadata
  const difficulty = await select({
    message: "Select difficulty:",
    choices: [
      { name: "Warm", value: "warm" },
      { name: "Easy", value: "easy" },
      { name: "Medium", value: "medium" },
      { name: "Hard", value: "hard" },
      { name: "Extreme", value: "extreme" },
    ],
  });

  const number = await input({
    message: "Challenge number (e.g., 4 for 00004):",
    validate: (value) =>
      /^\d{1,5}$/.test(value.trim()) || "Enter 1–5 digits (e.g., 4)",
  });

  const slug = await input({
    message: "Challenge slug (e.g., pick, deep-readonly):",
    validate: (value) =>
      /^[a-z0-9-]+$/.test(value) ||
      "Use lowercase letters, numbers, and hyphens only",
  });

  const paddedNumber = number.trim().padStart(5, '0');
  const folderName = `${paddedNumber}-${difficulty}-${slug}`;
  const challengeDir = join("challenges", difficulty, folderName);
  const notesFile = join("notes", `${slug}.md`);

  console.log(pc.dim(`\n📁 Preparing ${challengeDir}...`));

  // 2. Create directories
  await mkdir(challengeDir, { recursive: true });
  await mkdir(join("notes"), { recursive: true });

  // 3. Fetch official files from GitHub
  console.log(pc.dim("⬇️  Fetching official template and test cases..."));
  let templateContent, testContent;

  try {
    [templateContent, testContent] = await Promise.all([
      fetchRaw(folderName, "template.ts"),
      fetchRaw(folderName, "test-cases.ts"),
    ]);
  } catch (error) {
    console.error(
      pc.red(
        `\n❌ Could not fetch challenge files. Check the number and slug.`,
      ),
    );
    console.error(pc.dim(`URL tried: ${RAW_BASE}/${folderName}/template.ts`));
    process.exit(1);
  }

  // 4. Write challenge files
  await writeFile(join(challengeDir, "template.ts"), templateContent);
  await writeFile(join(challengeDir, "test-cases.ts"), testContent);

  // 5. Write notes.md
  const notesContent = `# ${slug}

- **Challenge**: [${folderName}](https://github.com/type-challenges/type-challenges/tree/main/questions/${folderName})
- **Difficulty**: ${difficulty}
- **Status**: In Progress
- **Attempts**: 0
- **Key insight**: 
- **Reuse**: 
`;

  await writeFile(notesFile, notesContent);

  // 6. Success message
  console.log(pc.green(`\n✅ Challenge created successfully!\n`));
  console.log(pc.bold("Next steps:"));
  console.log(`  1. Edit: ${pc.cyan(join(challengeDir, "template.ts"))}`);
  console.log(`  2. Run:  ${pc.cyan("bun run typecheck")}`);
  console.log(`  3. Log:  ${pc.cyan(notesFile)}\n`);
}

main().catch((err) => {
  console.error(pc.red(`\n❌ Unexpected error: ${err.message}`));
  process.exit(1);
});
