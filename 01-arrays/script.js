const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'];

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher); // Phil

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick';
console.log(teachers[4]); // Patrick

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher); // Luca

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher); // Nathan

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers[teachers.length - 1]); // Vanessa

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers[0]); // Sarah

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex); // 5

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty); // false

// Log finale dell'array teachers dopo tutte le modifiche
console.log(teachers);
/*
[
  'Sarah',   'Ed',
  'Fabio',   'Phil',
  'Patrick', 'Lewis',
  'Vanessa'
]
*/
