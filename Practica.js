const arr = [1, 2, 3, 4, 5];
const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande

const numGrande = (arr) => {
    let may = arr[0];
    for (let cont = 0; cont < arr.length; cont++) {
        if (arr[cont] > may)
            may = arr[cont];
    }
    return may;
}

console.log(numGrande(arr)); // devuelve 5
console.log(numGrande(arr2)); // devuelve 999

// Encontrar el numero mas pequeño
const numPequeno = (arr) => {
    let men = arr[0];
    for(let cont = 1; cont < arr.length; cont++){
        if(arr[cont] < men) {
            men = arr[cont];
        }
    }
    return men;
}

console.log(numPequeno(arr2)); // Output: -999


// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

const numMinMax = (arr) => {
  const max = numGrande(arr);
  const min = numPequeno(arr);
  return [min, max];
}



// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "23.5 ohms"
// Ohms >= 1

const sumResistance = (arr) => {
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    
    return `${sum} ohms`;
  }
  
  console.log(sumResistance([1, 5, 6, 3])); // "15 ohms"
  console.log(sumResistance([14, 3.5, 6])); // "23.5 ohms"


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];

function numMitad (a) {

   b=a/2;
   return c=[b, b];

}

console.log(numMitad(10));


// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR
const secretName =["Felipe", "Fer", "Zabdiel"];

function socSecreta (secretName) {
    let nombreSecreto = '';
    for (let i = 0; i < secretName.length; i++){
        nombreSecreto += secretName[i].charAt(0);
        
    }
    return nombreSecreto;
}

console.log(socSecreta(secretName));



// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

function onlineStatus(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === 'online') {
      count++;
    }
  }

  if (count === 0) {
    return 'Nadie esta en linea';
  } else if (count === 1) {
    return `${arr[0]} esta en linea`;
  } else if (count === 2) {
    return `${arr[0]} y ${arr[1]} estan en linea`;
  } else {
    return `${arr[0]}, ${arr[1]}, y ${count - 2} mas estan en linea`;
  }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
// Output: "mockIng99, J0eyPunch, and one more are online"



// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


function arrayMultiplos(num, long) {
    const multiplos = [];
    let total = 0;
    for (let i = 1; multiplos.length < long; i++) {
      total = num * i;
      multiplos.push(total);
    }
    return multiplos;
  }
  
  console.log(arrayMultiplos(2, 10));

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function esPositivoDominante(arr) {
  let positivos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos++;
    }
  }
  return positivos > arr.length / 2;
}

console.log(esPositivoDominante([-1, -3, -5, 4, 6767]));

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

function promedioAntipode(arr) {
  // Si la longitud del array es impar, eliminar el elemento en medio
  if (arr.length % 2 !== 0) {
    arr.splice(Math.floor(arr.length/2), 1);
  }

  // Dividir el array en 2 partes iguales
  const firstHalf = arr.slice(0, arr.length/2);
  const secondHalf = arr.slice(arr.length/2);

  // Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
  const sumArray = firstHalf.map((num, index) => num + secondHalf[secondHalf.length - 1 - index]);

  // Dividir cada numero del array final entre 2
  const finalArray = sumArray.map(num => num/2);

  return finalArray;
}

const arr1 = [1,2,3];


console.log(promedioAntipode(arr1)); // [3.5, 12, 4]
 // [5, 13, 8]