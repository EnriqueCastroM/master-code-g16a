let fruits = ['Fresa', 'Mango', 'Durazno',
'Mango', 'Sandia'];

//eliminar elementos del array
fruits.splice(4,2);
console.log(fruits);

//eliminar mango y remplazarlo por sandia
fruits.splice(2,1, 'Pera');
console.log(fruits);
//eliminar el ultimo elemento de un array
console.log(fruits.pop());
//eliminar el primer elemento del array
console.log(fruits.shift());

