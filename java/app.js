console.log('nazyyyyyyyyyyyyyyyyy');
const arrayNumeros = [1,2,3,4,5,5,3];

 const sumaArray = (arreglo)=>{
    let aux =0;
    for(let i=0;i<arreglo.length;i++)
    {
        aux = aux + arreglo[i];
    }
    return aux;
 }
 console.log(sumaArray(arrayNumeros));

 const primedio = (arreglo)=>{
    let aux = sumaArray(arrayNumeros);
    let aux2 = aux / arrayNumeros.length;
    console.log(aux2);

 }
 primedio(arrayNumeros);
 
 const eliminarDuplicados = (arreglo)=>{
    let aux = [];
    for(let i =0;i<arreglo.length;i++)
    {
        if(!aux.includes(arreglo[i]))
        {
            aux.push(arreglo[i]);
        }
    }
    return aux;
 }
 console.log(eliminarDuplicados(arrayNumeros));
let pares = [];
let impares = [];

const filtraParImpar = (arreglo,par,impar) =>{
   
    for(let i =0;i<arreglo.length;i++){
        if(arreglo[i] % 2 ==0)
        {
            pares.push(arreglo[i]);
        }
        else
        {
            impares.push(arrayNumeros[i]);
        }
    }
}
let array2 = [5,9,8,2,7,33];
filtraParImpar(arrayNumeros,pares,impares);
console.log(pares);
console.log(impares);

let array = eliminarDuplicados(arrayNumeros);

const combinaSinDuplicados = (array,arreglo2)=>{

    for(let i = 0;i<arreglo2.length;i++)
    {
        if(!array.includes(arreglo2[i])){
            array.push(arreglo2[i]);
        }
    }
    return array;
}
console.log(combinaSinDuplicados(arrayNumeros,array2));

const carroDeCompras = [
    {nombre : 'pancito' , precio :20},
    {nombre: 'verduras',precio :100},
    {nombre: 'carne', precio: 500},
]

const carritoDeCompras = (carrito)=>{

    return{
        agregar: (producto) => {
            carrito.push(producto);
        },
        eliminar : (producto) => {
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
const yogurt ={
    nombre : 'yogurt',
    precio : 50,
};
carritoDeCompras(carroDeCompras).agregar(yogurt);
carritoDeCompras(carroDeCompras).eliminar({nombre : 'pancito'}); // hace una referencia directa a el objeto con nombre pancito
console.log(carritoDeCompras(carroDeCompras).calcularTotal());
console.log(carroDeCompras);