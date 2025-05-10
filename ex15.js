let a = 0;
let b = 1;

console.log('Segue os 10 primeiros números da sequência de Fibonacci: ');

for (let i = 0; i < 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
};