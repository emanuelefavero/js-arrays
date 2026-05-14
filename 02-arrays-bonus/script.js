// NON MODIFICARE QUESTA VARIABILE
const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca'];

// Array iniziale
console.log('Array iniziale:', teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log('1.', reversedTeachers);
// [ 'Luca', 'Lewis', 'Carlo',  'Phil', 'Fabio',  'Ed', 'Nathan' ]

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((teacher) => teacher.length >= 5);
console.log('2.', longNames); // [ 'Lewis', 'Carlo', 'Fabio', 'Nathan' ]

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1);
console.log('3.', teachers);
// [ 'Luca', 'Lewis', 'Carlo', 'Phil', 'Fabio', 'Nathan' ]

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') !== -1;
console.log('4.', isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log('5.', teachersString); // Luca,Lewis,Carlo,Phil,Fabio,Nathan

// Array finale
console.log('Array finale:', teachers);
// [ 'Luca', 'Lewis', 'Carlo', 'Phil', 'Fabio', 'Nathan' ]
