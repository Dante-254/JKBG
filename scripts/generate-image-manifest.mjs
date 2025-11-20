#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = path.resolve("./public");

function readDirUrls(dirName) {
  const dir = path.join(root, dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(
      (f) => !f.startsWith(".") && fs.statSync(path.join(dir, f)).isFile()
    )
    .map((f) => `/${dirName}/${encodeURI(f)}`);
}

const manifest = {
  current_site: readDirUrls("current_site"),
  gallery: readDirUrls("gallery"),
};

const outPath = path.join(root, "_image-manifest.json");
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), "utf8");
console.log(
  "Wrote",
  outPath,
  "with",
  manifest.current_site.length,
  "current_site images and",
  manifest.gallery.length,
  "gallery images"
);
