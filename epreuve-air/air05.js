let j = 0;
let liste = [];
const dernierChiffre = process.argv[process.argv.length - 1] / 1;

// creer une liste avec tous les arguments sauf le dernier
for (let i = 2; i < process.argv.length - 1; i++) {
  liste[j] = process.argv[i] / 1;
  j++;
}

// + ou - chaque element de la liste
for (let i = 0; liste[i]; i++) {
  liste[i] = liste[i] + dernierChiffre;
}

console.log(liste);
