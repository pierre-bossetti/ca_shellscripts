//supprimer d'une liste les elements qui contiennent le caractere du dernier argument
let j = 0;
let liste = [];
const dernierArgument = process.argv[process.argv.length - 1];

// creer une liste avec tous les arguments sauf le dernier
for (let i = 2; i < process.argv.length - 1; i++) {
  liste[j] = process.argv[i];
  j++;
}
// controler caractere par caractere si le dernier argument est dans un element du tableau
// supprimer l'element du tableau si c'est le cas
function passSanitaire(liste, string) {
  for (let i = 0; liste[i]; i++) {
    for (let j = 0; liste[i][j]; j++) {
      if (
        liste[i][j] === string.toUpperCase() ||
        liste[i][j] === string.toLowerCase()
      ) {
        liste.splice(i, 1);
      }
    }
  }
  return liste;
}

console.log(passSanitaire(liste, dernierArgument));
