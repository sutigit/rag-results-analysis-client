import fs from "fs";
import path from "path";

type FolderStructure = {
  name: string;
  type: "folder";
  children: (FolderStructure | { name: string; type: "file" })[];
};

export function getFolderStructure(
  dirPath: string
): FolderStructure | { name: string; type: "file" } | null {
  const stats = fs.statSync(dirPath);

  if (!stats.isDirectory()) return null;

  const structure: FolderStructure = {
    name: path.basename(dirPath),
    type: "folder",
    children: [],
  };

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const itemStats = fs.statSync(fullPath);

    if (itemStats.isDirectory()) {
      const child = getFolderStructure(fullPath);
      if (child !== null) {
        structure.children.push(child);
      }
    } else {
      structure.children.push({
        name: item,
        type: "file",
      });
    }
  }

  return structure;
}
