// let count = 0;
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         count++
//     }
// }
// console.log(count);



//////////////// task /////////////////

// print tables from 1 to 5

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }


/*
print below pattern
# # # #
# # # #
# # # #
# # # #
*/

// for(let i = 0; i < 4; i++){
//     let row = ""
//     for(let j = 0; j < 4; j++){
//         row += "# "
//     }
//     console.log(row)
// }

// using while loop
// let i = 0
// while(i < 4){
//     let row = ""
//     let j = 0
//     while(j < 4){
//         row += "# "
//         j++
//     }
//     console.log(row)
//     i++
// }




/*
Matrix
00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33 
*/
// for(let i = 0; i < 4;i++){
//     let row = ""
//     for(let j = 0; j < 4; j++){
//         row += `${i}${j} `
//     }
//     console.log(row)
// }



/* 
*
* * 
* * * 
* * * *
* * * * *
*/


// for(let i = 0; i < 5; i++){
//     let row = ""
//     for(let j = 0; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }




/*
* * * * *
* * * *
* * *
* *
*
*/

// for(let i = 4; i >= 0; i--){
//     let row = ""
//     for(let j = i; j >= 0; j--){
//         row += "* "
//     }
//     console.log(row)
// }



/*
A
AB
ABC
ABCD
ABCDE
*/

for(let i = 0; i < 5; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += String.fromCharCode(65 + j);
    }
    console.log(row)
}