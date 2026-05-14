// NON MODIFICARE QUESTA VARIABILE
const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'];

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log('1.', reversedTeachers);
// [ 'Luca', 'Lewis', 'Carlo',  'Phil', 'Fabio',  'Ed', 'Nathan' ]

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const name = teachers[i];
  if (name.length >= 5) longNames.push(name);
}

console.log('2.', longNames); // [ 'Lewis', 'Carlo', 'Fabio', 'Nathan' ]

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf('Ed');
if (edIndex !== -1) teachers.splice(edIndex, 1);
console.log('3.', teachers);
// [ 'Luca', 'Lewis', 'Carlo', 'Phil', 'Fabio', 'Nathan' ]

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') !== -1;
console.log('4.', isFabioPresent); // true

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log('5.', teachersString); // Luca,Lewis,Carlo,Phil,Fabio,Nathan

// --------------------------

// Array finale
console.log('Array finale:', teachers);
// [ 'Luca', 'Lewis', 'Carlo', 'Phil', 'Fabio', 'Nathan' ]

/*
SOLUZIONI ALTERNATIVE:
// NOTE: .filter, .includes e altri metodi sono esplicitamente vietati nella consegna, ma li lascio qui come riferimento

1. Reverse senza mutare l'array originale:
const reversedTeachers = teachers.toReversed();

2. Long names con filter:
const longNames = teachers.filter((name) => name.length >= 5);

3. Rimuovere Ed creando un nuovo array:
const teachersWithoutEd = teachers.filter((name) => name !== 'Ed');

4.a Verificare Fabio con includes:
const isFabioPresent = teachers.includes('Fabio');

4.b Verificare Fabio con ciclo for:
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    break;
  }
}

5 Stringa con join:
const teachersString = teachers.join();
*/
