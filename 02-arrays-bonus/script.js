// NON MODIFICARE QUESTA VARIABILE
const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'];

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

console.log('1.', reversedTeachers);
// [ 'Luca', 'Lewis', 'Carlo',  'Phil', 'Fabio',  'Ed', 'Nathan' ]

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const name = teachers[i];
  if (name.length >= 5) longNames.push(name);
}

console.log('2.', longNames); // [ 'Nathan', 'Fabio', 'Carlo', 'Lewis' ]

// 3. Rimuovi 'Ed' dall'array teachers

let edIndex = -1;

// Trova l'indice di 'Ed' nell'array teachers
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Ed') edIndex = i;
}

// Se 'Ed' è stato trovato:
// Sposta tutti gli elementi successivi a 'Ed' indietro di una posizione e rimuovi l'ultimo elemento dell'array
if (edIndex !== -1) {
  for (let i = edIndex; i < teachers.length - 1; i++) {
    teachers[i] = teachers[i + 1];
  }

  teachers.length = teachers.length - 1;
}

console.log('3.', teachers);
// [ 'Nathan', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca' ]

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    break;
  }
}

console.log('4.', isFabioPresent); // true

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = '';

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i < teachers.length - 1) teachersString += ',';
}

console.log('5.', teachersString); // 'Nathan,Fabio,Phil,Carlo,Lewis,Luca'

// --------------------------

// Array finale
console.log('Array finale:', teachers);
// [ 'Nathan', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca' ]

/*
SOLUZIONI ALTERNATIVE:
// NOTE: .filter, .includes e altri metodi sono esplicitamente vietati nella consegna, ma li lascio qui come riferimento


1. Reverse mutando l'array originale:
const reversedTeachers = teachers.reverse();

1.b Reverse senza mutare l'array originale:
const reversedTeachers = teachers.toReversed();

1.c Reverse con approccio two pointers:
let left = 0;
let right = teachers.length - 1;
while (left < right) {
  const temp = teachers[left];
  teachers[left] = teachers[right];
  teachers[right] = temp;
  left++;
  right--;
}
const reversedTeachers = teachers;


2. Long names con filter:
const longNames = teachers.filter((name) => name.length >= 5);


3 Rimuovere Ed mutando l'array originale:
const edIndex = teachers.indexOf('Ed');
if (edIndex !== -1) teachers.splice(edIndex, 1);

3.b Rimuovere Ed senza mutare l'array originale:
const teachersWithoutEd = teachers.filter((name) => name !== 'Ed');


4 Verificare Fabio con indexOf:
const isFabioPresent = teachers.indexOf('Fabio') !== -1;

4.b Verificare Fabio con includes:
const isFabioPresent = teachers.includes('Fabio');


5 Stringa con toString:
const teachersString = teachers.toString();

5.b Stringa con join:
const teachersString = teachers.join();
*/
