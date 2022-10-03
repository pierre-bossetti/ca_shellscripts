// programme qui enleve les caracteres identiques adjacents
const removeDuplicates = (str) => {
  let lastChar = str[0];
  let finalT = str[0];
  for (const char of str.slice(1)) {
    if (lastChar !== char) finalT += char;
    lastChar = char;
  }
  return finalT;
};

// impression de la string sans caracteres adjacents
if (process.argv.length != 3) {
  console.log("error.");
} else {
  console.log(removeDuplicates(process.argv[2]));
}
