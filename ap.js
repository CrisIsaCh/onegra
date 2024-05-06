let numero =6

// console.log(numero);
let variable = "";
// while (numero!=0) {
//     numero=numero.toString();
//     for (let i = 0; i < numero; i++) {
//         variable+=numero;   
//         console.log(variable); 
//     }
//     numero-=1
//     console.log(variable);
//     variable="";
// }
let numero2=numero
console.log(numero2);
for (let i = 0; i < numero; i++) {
    for (let i = 0; i < numero2; i++) {
        variable += numero2;

    }
   console.log(variable);
    numero2-=1;
    
    
    variable="";

}