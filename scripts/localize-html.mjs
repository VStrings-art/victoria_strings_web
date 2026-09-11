// The App Router renders <html> once, in the root layout, so every exported
// page carries lang="en". After the export we stamp the correct language onto
// the pages under each locale directory, so the static HTML a crawler or a
// screen reader sees is already right — no client-side correction.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const LOCALE_TAGS = { de: "de", fr: "fr", it: "it", es: "es" };

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const path = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await htmlFiles(path)));
    else if (e.name.endsWith(".html")) files.push(path);
  }
  return files;
}

let patched = 0;
for (const [dir, tag] of Object.entries(LOCALE_TAGS)) {
  let files;
  try {
    // The locale home page exports as <locale>.html beside the directory,
    // not inside it, so it has to be named explicitly.
    files = [join(OUT, `${dir}.html`), ...(await htmlFiles(join(OUT, dir)))];
  } catch {
    console.warn(`localize-html: no ${dir}/ directory, skipping`);
    continue;
  }
  for (const file of files) {
    const html = await readFile(file, "utf8");
    const next = html.replace(/<html([^>]*?)\slang="en"/, `<html$1 lang="${tag}"`);
    if (next !== html) {
      await writeFile(file, next);
      patched++;
    }
  }
}
console.log(`localize-html: set lang on ${patched} pages`);
