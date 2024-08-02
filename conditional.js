// ^  Conditional statements in functions.


//! 1 JS program to find maximum between two numbers.


    // function maximum(num1,num2){
    //     if(num1>num2){
    //         console.log("Greater number is:"+num1);
    //     }
    //     else{
    //         console.log("Greater number is:"+num2)
    //     }
    // }
    // maximum(1,2);

// !  2 JS program to find maximum between three numbers.

    // function maximumofThree(num1,num2,num3){
    //     if(num1>num2 && num1>num3){
    //         console.log("The largest number is "+num1);
    //     }
    //     else if(num2>num1 && num2>num3){
    //         console.log("The largest number is "+num2)
    //     }
    //     else{
    //         console.log("The largest number is "+num3)
    //     }
    // }
    // maximumofThree(3,5,1);

//! 3 JS program to check whether a number is negative, positive or zero.


    
    // function negatveOrNot(number){
    //     if(number>0){
    //         console.log("The number is positive!")
    //     }
    //     else if(number===0){
    //         console.log("The number is zero!")
    //     }
    //     else{
    //         console.log("The number is negative")
    //     }
    // }
    // negatveOrNot(-1);

//! 4 JS program to check whether a number is divisible by 5 and 11 or not.

    // function divisibleOrNot(number){
    //     if(number%5===0 && number%11===0){
    //         console.log(number+" is divisible by 5 and 11");
    //     }
    //     else{
    //         console.log(number+" is not divisible by 5 and 11")
    //     }
    // }
    // divisibleOrNot


    
// ! 5 JS program to check whether a number is even or odd.

    // function evnOrOdd(number){
    //     if(number%2===0){
    //         console.log(`The number ${number} is even!`);
    //     }
    //     else{
    //         console.log(`The number ${number} is odd`)
    //     }
    // }
    // evnOrOdd(7);

// ! 6 JS program to check whether a year is leap year or not.

    // function leapYear(year){
    //     if((year%4==0||year%400==0)&&year%100==0){
    //         console.log(`The year ${year} is a leap year`)
    //     }else{
    //     console.log(`The year ${year} is a leap year`)
    //     }
    // }
    // leapYear(2024)

//! 7 JS program to input angles of a triangle and check whether triangle is valid or not.

    // function sumOfAngles(angle1,angle2,angle3){

    //     let sumOfAngles = angle1 + angle2 + angle3;

    //     if(sumOfAngles === 180){
    //         console.log("This is a valid triangle ! ")
    //     }
    //     else{
    //         console.log("This is not a valid triangle ")
    //     }
    // }

    // sumOfAngles(50,60,70)

// ! 8 JS program to check whether the triangle is equilateral, isosceles or scalene triangle.

    // function triangleType(side1,side2,side3){

    //     if(side1===side2 && side2 ===side3){
    //         console.log("The triangle is equilateral !")
    //     }
    //     else if(side1===side2 || side1===side3 || side2===side3 ){
    //         console.log("The traingle is isoceles triangle ")
    //     }
    //     else{
    //         console.log("The triangle is scalene")
    //     }
    // }

    // triangleType(30,30,120)


//! 9 JS program to calculate profit or loss.

    // function profitOrLoss(BuyingPrice,SellingPrice){
    //     if(BuyingPrice===SellingPrice){
    //         console.log("Neither profit nor loss")
    //     }
    //     else if(BuyingPrice>SellingPrice){
    //         console.log(" loss")
    //     }
    //     else{
    //         console.log(" profit")
    //     }
    // }

    // profitOrLoss(10,15)

//!  10 JS program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// ! Percentage >= 90% : Grade A
// ! Percentage >= 80% : Grade B
// ! Percentage >= 70% : Grade C
// ! Percentage >= 60% : Grade D
// ! Percentage >= 40% : Grade E
// ! Percentage < 40% : Grade F

// function grade(Physics,Chemistry,Biology,Mathematics,Computer){
// let percentage = (Physics+Chemistry+Biology+Mathematics+Computer)/5;

//     if(percentage>=90){
//         console.log("The grade is A ")
//     }
//     else if(percentage>=80){
//         console.log("The grade is B ")
//     }
//     else if(percentage>=70){
//         console.log("The grade is C ")
//     }
//     else if(percentage>=60){
//         console.log("The grade is D ")
//     }
//     else if(percentage>=40){
//         console.log("The grade is E ")
//     }
//     else{
//         console.log("You have failed go and study !")
//     }
// }
// grade(90,80,90,100,90)

// ! 11 JS program to input basic salary of an employee and calculate its Gross salary according to following:
// !Basic Salary <= 10000 : HRA = 20%, DA = 80%
// !Basic Salary <= 20000 : HRA = 25%, DA = 90%
// !Basic Salary > 20000 : HRA = 30%, DA = 95%
//? gross = basic + hra + da 


    // function GrossSalary(BasicSalary){
    //     let hra,da;
    //     let GrossSalary;
    //     if(BasicSalary<=10000){
    //         hra = 0.2 * BasicSalary;
    //         da = 0.8 * BasicSalary;
    //         GrossSalary = BasicSalary + hra + da;
    //         console.log("The Gross salary is "+GrossSalary);
    //     }
    //     else if(BasicSalary<=20000){
    //         hra = 0.25 * BasicSalary;
    //         da = 0.9 * BasicSalary;
    //         GrossSalary = BasicSalary + hra + da;
    //         console.log("The Gross salary is "+GrossSalary);
    //     }
    //     else {
    //         hra = 0.3 * BasicSalary;
    //         da = 0.95 * BasicSalary;
    //         GrossSalary = BasicSalary + hra + da;
    //         console.log("The Gross salary is "+GrossSalary);
    //     }
    // }
    // GrossSalary(20001)


// ! 12 JS program to input electricity unit charges and calculate total electricity bill according to the given condition:

//! For first 50 units Rs. 0.50/unit
//! For next 100 units Rs. 0.75/unit
//! For next 100 units Rs. 1.20/unit
//! For unit above 250 Rs. 1.50/unit

//! An additional surcharge of 20% is added to the bill


// function ElectricityBll(ElectricityUnit){
//     let bill;
//     let additionalCharges ;
//     let TotalCharges;

//     if(ElectricityUnit<=50){
//         bill = ElectricityUnit * 0.50;
//         additionalCharges = bill * 0.2 ;
//         TotalCharges = additionalCharges + bill;
//         console.log(TotalCharges);
//     }
//     else if(ElectricityUnit<=100){
//         bill = ElectricityUnit * 0.75;
//         additionalCharges = bill * 0.2 ;
//         TotalCharges = additionalCharges + bill;
//         console.log(TotalCharges);
//     }
//     else if(ElectricityUnit>100 && ElectricityUnit<=250){
//         bill = ElectricityUnit * 1.20;
//         additionalCharges = bill * 0.2 ;
//         TotalCharges = additionalCharges + bill;
//         console.log(TotalCharges);
//     }
//     else{
//         bill = ElectricityUnit * 1.50;
//         additionalCharges = bill * 0.2 ;
//         TotalCharges = additionalCharges + bill;
//         console.log(TotalCharges);
//     }
// }
// ElectricityBll(100)