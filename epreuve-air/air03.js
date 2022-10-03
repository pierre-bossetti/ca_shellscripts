// cherche si une string est présente deux fois dans une liste
let j = 0;
let stringsArray = [];

// creer une liste avec tous les arguments
for (let i = 2; i < process.argv.length; i++) {
  stringsArray[j] = process.argv[i];
  j++;
}

// controler si l'element est present deux fois dans la liste
function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i] && i != j) {
        found = true;
        break;
      }
    }
    if (!found) return nums[i];
  }
}

// impression du chiffre qui n'a pas de paire
if (process.argv.length <= 3) {
  console.log("error.");
} else {
  console.log(singleNumber(stringsArray));
}
