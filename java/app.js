console.log('nazyyyyyyyyyyyyyyyyy');
const arrayNumeros = [1, 2, 3, 4, 5, 5, 3];

const sumaArray = (arreglo) => {
    let aux = 0;
    for (let i = 0; i < arreglo.length; i++) {
        aux = aux + arreglo[i];
    }
    return aux;
}
console.log(sumaArray(arrayNumeros));

const primedio = (arreglo) => {
    let aux = sumaArray(arrayNumeros);
    let aux2 = aux / arrayNumeros.length;
    console.log(aux2);

}
primedio(arrayNumeros);

const eliminarDuplicados = (arreglo) => {
    let aux = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (!aux.includes(arreglo[i])) {
            aux.push(arreglo[i]);
        }
    }
    return aux;
}
console.log(eliminarDuplicados(arrayNumeros));
let pares = [];
let impares = [];

const filtraParImpar = (arreglo, par, impar) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            pares.push(arreglo[i]);
        }
        else {
            impares.push(arrayNumeros[i]);
        }
    }
}
let array2 = [5, 9, 8, 2, 7, 33];
filtraParImpar(arrayNumeros, pares, impares);
console.log(pares);
console.log(impares);

let array = eliminarDuplicados(arrayNumeros);

const combinaSinDuplicados = (array, arreglo2) => {

    for (let i = 0; i < arreglo2.length; i++) {
        if (!array.includes(arreglo2[i])) {
            array.push(arreglo2[i]);
        }
    }
    return array;
}
console.log(combinaSinDuplicados(arrayNumeros, array2));

const carroDeCompras = [
    { nombre: 'pancito', precio: 20 },
    { nombre: 'verduras', precio: 100 },
    { nombre: 'carne', precio: 500 },
]

const carritoDeCompras = (carrito) => {

    return {
        agregar: (producto) => {
            carrito.push(producto);
        },
        eliminar: (producto) => {
            for (let i = 0; i < carrito.length; i++) {
                if (producto.nombre === carrito[i].nombre) {
                    carrito.splice(i, 1);
                }
            }
        },
        calcularTotal: () => {
            let aux = 0;
            for (let i = 0; i < carrito.length; i++) {
                aux = aux + carrito[i].precio;
            }
            return aux;
        },
    };
};
const yogurt = {
    nombre: 'yogurt',
    precio: 50,
};
carritoDeCompras(carroDeCompras).agregar(yogurt);
carritoDeCompras(carroDeCompras).eliminar({ nombre: 'pancito' }); // hace una referencia directa a el objeto con nombre pancito
console.log(carritoDeCompras(carroDeCompras).calcularTotal());
console.log(carroDeCompras);

//SET Y MAP

const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 30 },
];

const soloNombre = [...personas].map((persona) => persona.nombre); //crea un map con solo los nombres de los arreglo

console.log(soloNombre);

const otrasPersonas = [
    { nombre: "Carlos", edad: 17 },
    { nombre: "Ana", edad: 23 },
    { nombre: "Rocio", edad: 25 },
    { nombre: "Luis", edad: 16 },
];

const aux = otrasPersonas.filter((persona) => persona.edad > 17);//filtra solo a los mayores de edad del arreglo de otras personas
console.log(aux);





function cuentaELementos() {
    const numeros = [2, 3, 4, 2, 3, 5, 4, 5, 6];
    let contador = 0;
    const mapContador = new Map();
    for (let i = 0; i < numeros.length; i++) {
        for (let y = 0; y < numeros.length; y++) {
            if (numeros[i] === numeros[y]) {// ENCUENTRA LA CANTIDAD DE VECES QUE SE REPITE CADA NUMERO Y LO USA COMO CLAVE EN EL MAP
                contador++;
            }

        }
        mapContador.set(numeros[i], contador);
        contador = 0;
    }
    console.log(mapContador);
}

cuentaELementos();

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaCuarados = (numeros) => {//FILTRA LOS OBJETOS PARES Y LOS MULTIPLICA AL CUADRADO
    const total = numeros.filter((pares) => pares % 2 === 0).map((cuadrado) => cuadrado ** 2).reduce((valor, actual) => valor + actual, 0);
    console.log(total);
}
sumaCuarados(numeros2);

const objeto = {
    a: 1,
    b: 2,
    c: 3,
};
function crearMapConObjetos(objeto) {
    const mapObjeto = new Map();
    for (let key in objeto) {
        mapObjeto.set(key, objeto[key]);
    }
    console.log(mapObjeto);
}

crearMapConObjetos(objeto);

const mapaT = new Map([
    ["nombre", "fausto"],
    ["edad", 20],
    ["ciudad", "mar del plata"],
]);

function mapaTOObjeto (mapa)//PASO EL CONTENIDO DE UN MAPA UN OBJETO
{
    const obj = {};
    mapa.keys().forEach((k)=>{
        obj[k] = mapa.get(k);
    })
    console.log(obj);
}
mapaTOObjeto(mapaT);


const estudiantes = [
    { id: 1, nombre: "Maria" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Caro" },
    { id: 4, nombre: "Juan" },
  ];
  
  const notas = [
    { id: 1, nota: 10 },
    { id: 2, nota: 9 },
    { id: 3, nota: 8 },
  ];

const numeros3 = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7];
const setParaSacarDuplicados = (numeros) => {
    const seter = new Set();
    for (let i = 0; i < numeros.length; i++) {
        if (!seter.has(numeros[i])) {
            seter.add(numeros[i]);

        }
    }
    console.log(seter);
  }


setParaSacarDuplicados(numeros3);