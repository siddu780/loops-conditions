// ^  Loops in functions.


// ! 1. JS program to print all natural numbers from 1 to n. – using while loop

    
    // let naturalNumbers=(n)=>{
    //     let i=1;
    //     while(i<=n){
    //         console.log(i)
    //         i++;
    //     }
    // }

    // naturalNumbers(15);

    
// ! 2. JS program to print all natural numbers in reverse (from n to 1). – using while loop

    // function revrse(n){
    //     let i=15;
    //     while(i>1){
    //         console.log(i);
    //         i--;
    //     }
    // }
    // revrse(15);
    
// ! 3. JS program to print all even numbers between 1 to 100. – using while loop

    // let evenNumbers=function(){
    //     let i=1;
    //     while(i<100){
    //         if(i%2==0){
    //             console.log(i);
    //         }
    //         i++;
    //     }
    // }
    // evenNumbers()

// ! 4. JS program to print all odd number between 1 to 100.

    // function oddNumbers(){
    //     for(let i = 1;i<=100;i++){
    //         if(i%2!==0){
    //             console.log(i);
    //         }
    //     }
    // }
    // oddNumbers()

//! 5. JS program to find sum of all natural numbers between 1 to n.

    // let sumOfNatural=function(n){
    //     let sum=0;
    //     for(let i=0;i<=n;i++){
    //         sum=i+sum;
    //     }
    //     console.log(sum);
    // }
    // sumOfNatural(4)

// ! 6. JS program to find sum of all even numbers between 1 to n.

    // let sumOfEven=(n)=>{
    //     let sum=0;
    //     let i=1;
    //     while(i<=n){
    //         if(i%2==0){
    //             sum=sum+i;
    //         }i++;
    //     }
    //     console.log(sum)
    // }
    // sumOfEven(10)

//! 7. JS program to find sum of all odd numbers between 1 to n.

    // let sumOfOdd=function(n){
    //     let i=0;
    //     let sum=0;
    //     while(i<=n){
    //         if(i%2!==0){
    //             sum=sum+i;
    //         }i++;
    //     }console.log(sum)
    // }
    // sumOfOdd(10);

//! 8. JS program to print multiplication table of any number.
    // function Multiplication(table){
    //     for(let i=1;i<=1;i++){
    //         console.log(`${table} X ${i} = ${table*i}`)
    //     }
    // }
    // Multiplication(10)

// & . HW (reverse the mulitplication table)

    // function Multiplication(table){
    //     for(let i=table;i>=1;i--){
    //         console.log(`${table} X ${i} = ${table*i}`)
    //     }
    // }
    // Multiplication(10)

// ! 9. JS program to count number of digits in a number.

    // let countNum=(number)=>{
    //     let count=0;
    //     while(number!=0){
    //         count++;
    //         number = Math.floor(number/10); 
    //     }
    //     console.log(count)
    // }
    // countNum(12345)

// ! 10. JS program to calculate sum of digits of a number.


    //  function sumOfDigits(number){
    //     let sum=0;
    //     let l;
    //     while(number>0){
    //         l=number%10;
    //         sum=l+sum;
    //         number=Math.floor(number/10);
    //     }
    //     console.log(sum);
    //  }
    //  sumOfDigits(1234)

    // //& 11. JS program to calculate product of digits of a number. HW

    // function product(number){
    //     let multiplication = 1;
    //     while(number!=0){
    //         let last = number%10;
    //         multiplication = multiplication * last;
    //         number = Math.floor(number/10);
    //     }
    //     console.log(multiplication)
    // }
    // product(1234)

    //! 12. JS program to enter a number and print its reverse.

    // function printrev(number){
    //     let sum = 0;

    //     while(number!=0){
    //         let last =  number%10;
    //         sum = sum*10 + last;
    //         number = Math.floor(number/10);
    //     }
    //     console.log(sum)
    // }
    // printrev(123)

    //& 13. JS program to check whether a number is palindrome or not.


    // let palindromeOrNot=function(num){
    //     let temp=num;
    //     let reverse=0;
    //     while(num!=0){
    //         let last=num%10;
    //         reverse=reverse*10+last;
    //         num=Math.floor(num/10);
    //     }
    //     if(reverse===temp){
    //         console.log(`The ${temp} is a palindorme.`)
    //     }else{
    //         console.log(`The ${temp} is not a palindorme.`)
            
    //     }
    // }
    // palindromeOrNot(12321)

    //! 14 . JS program to find power of a number using for loop.


    // function power(base){
    //     let expo = 2; 
    //     let power = 1;
    //     for(let i = 1; i<=expo;i++){
    //         power = power * base;
    //     }

    //     console.log(power)
    // }
    // power(15)

    //! 15. JS program to find all factors of a number.

    // function factors(number){
    //     for(let i = 1;i<=number;i++){
    //         if(number%i===0){
    //             console.log(i)
    //         }
    //     }
    // }factors(15);

    // ! 16. JS program to calculate factorial of a number.

    // function factorial(number){
    //     let fact = 1;

    //     for(let i = 1;i<=number;i++){
    //         fact = fact * i;
    //     }

    //     console.log(fact)
    // }
    // factorial(5)

    // ! 17. JS program to find LCM of two numbers.

//    function LCM(number1,number2){

//         for(let i = 2; i<=number1;i++){
//             if(number1%i===0 && number2%i===0){
//                 console.log(i)
//             }
//         }
//     }
//     LCM(3,9)

