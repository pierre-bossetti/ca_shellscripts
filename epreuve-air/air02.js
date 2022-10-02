let stringsArray = [];
let j = 0;
let string = "";
const lastArgv = process.argv[process.argv.length - 1];

// creer un tableau avec tous les arguments sauf le dernier
for (let i = 2; i < process.argv.length; i++) {
  stringsArray[j] = process.argv[i];
  j++;
}

function concatener(stringsArray, separateur) {
  for (let i = 0; stringsArray[i]; i++) {
    string += stringsArray[i] + separateur;
  }
  return string;
}

if (process.argv.length < 5) {
  console.log("error");
} else {
  console.log(concatener(stringsArray, lastArgv));
}
