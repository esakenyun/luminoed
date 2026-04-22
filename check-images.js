const fs = require("fs");
const path = require("path");

// CONFIG
const PUBLIC_DIR = path.join(__dirname, "public");
const SRC_DIR = __dirname;
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
const CODE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

// Recursively get files
function getAllFiles(dir, extFilter = []) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      // ignore node_modules, .next, .git
      if (file === "node_modules" || file === ".next" || file === ".git") {
        return;
      }
      results = results.concat(getAllFiles(fullPath, extFilter));
    } else {
      if (extFilter.length === 0 || extFilter.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });

  return results;
}

// Get all images
const imageFiles = getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS);

// Get all code files
const codeFiles = getAllFiles(SRC_DIR, CODE_EXTENSIONS);

// Read all code into memory
const codeContent = codeFiles
  .map((file) => fs.readFileSync(file, "utf-8"))
  .join("\n");

// Check usage
const usedImages = [];
const unusedImages = [];

imageFiles.forEach((imgPath) => {
  const fileName = path.basename(imgPath);

  if (codeContent.includes(fileName)) {
    usedImages.push(imgPath);
  } else {
    unusedImages.push(imgPath);
  }
});

// OUTPUT
console.log("\n✅ USED IMAGES:");
usedImages.forEach((img) => console.log("  ", img));

console.log("\n❌ UNUSED IMAGES:");
unusedImages.forEach((img) => console.log("  ", img));

console.log(`\nSummary:
Used: ${usedImages.length}
Unused: ${unusedImages.length}
Total: ${imageFiles.length}`);
