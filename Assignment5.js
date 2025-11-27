const fs = require("fs");

let data = [];
if (fs.existsSync("notes.json")) {
  data = JSON.parse(fs.readFileSync("notes.json", "utf8"));
}

const cmd = process.argv[2];
const text = process.argv[3];

// ADD
if (cmd === "add") {
  data.push(text);
  fs.writeFileSync("notes.json", JSON.stringify(data));
  console.log("Saved:", text);
}

// DELETE
else if (cmd === "delete") {
  data.splice(text, 1);
  fs.writeFileSync("notes.json", JSON.stringify(data));
  console.log("Deleted:", text);
}

// LIST
else if (cmd === "list") {
  data.forEach((item, i) => console.log(i, item));
}

// No command
else {
  console.log("Use: add / delete / list");
}
