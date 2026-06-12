let n = 5
/*
* * * *
* * * *
* * * *
* * * *
*/

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < n; j++){
        row += "* "
    }
    console.log(row)
}

/*

*
**
***
****
*****
****
***
**
*

*/
// let n = 5
for(let i = 1; i < 2*n; i++){
    let row = ""
    let star = i
    if(i > n) star = 2 * n - i;
    for(let j = 1; j <= star; j++){
        row += "* "
    }
    console.log(row)
}

/**
*
**
***
****
*****
*/

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

/*
*****
****
***
**
*
*/

for(let i = n - 1; i >= 0; i--){
    let row = ""
    for(j = 0; j < i; j++){
        row += "* "
    }
    console.log(row)
}

/*

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *

*/

/*
    *
   **
  ***
 ****
*****
*/

for(let i = 0; i < n; i++){
    let row = ""
    for(let space = i; space < n; space++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "*"
    }
    console.log(row)
}



/*
*****
 ****
  ***
   **
    *
*/

for(let i = n - 2; i >= 0; i--){
    let row = ""
    for(let space = i; space < n; space++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "*"
    }
    console.log(row)
}

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

/* star will +2
    *
   ***
*/
console.log("\n")



for(let i = 0; i < n - 1; i+=2){
    let row = ""
    for(let s = i; s < n; s++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

/* star will -2
  *****
   ***
    *
*/

for(let i = n - 1; i >= 0; i-=2){
    let row = ""
    for(let  s = i; s < n; s++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

/*
*******
 *****
  ***
   *
  ***
 *****
*******
*/
console.log("\n")

for(let i = n - 1; i >= 1; i-=2){
    let row = ""
    for(let s = i; s < n; s++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

for(let i = 0; i < n; i+=2){
    let row = ""
    for(let s = i; s < n; s++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        row += "* "
    }
    console.log(row)
}


/*
*****
*   *
*   *
*   *
*****
*/

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < n; j++){
        if(j == 0 || j == n-1 || i == 0 || i == n - 1){
            row += "*"
        }
        else{
            row += " "
        }
    }
    console.log(row)
}

/*
     *
    **
   * *
  *  *
 *****
    *
   * *
  *   *
 *     *
*********
*/


for(let i = 0; i < n; i++){
    let row = ""
    for(let space = i; space < n; space++){
        row += " "
    }
    for(let j = 0; j <= i; j++){
        if(i == 0 || i == n - 1 || j == 0 || j == i){

            row += "*"
        }
        else{
            row += " "
        }
    }
    console.log(row)
}

for(let i = 0; i < n; i++){
    let row = "" 
    for(let s = 0; s < n - i - 1; s++){
        row += " "
    }
    for(let  j = 0; j <= 2 * i ; j++){
        if(i == 0 || i == n - 1 || j == 0 || j == 2 * i ){

            row += "*"
        }
        else{
            row += " "
        }
    }
    console.log(row)
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// let n = 6
let spaces = 0
for(let i = n ; i >= 1; i--){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    for(let s = 1; s <= spaces; s++){
        row += " "
    }
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    console.log(row)
    spaces += 2
}

let initSpc = 2 * (n - 1)
for(let i = 1 ; i <= n; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    for(let s = 1; s <= initSpc; s++){
        row += " "
    }
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    initSpc -= 2
    console.log(row)
}


/*
11111
22222
33333
44444
55555
*/
console.log("\n")
for(let  i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= n; j++){
        row += i
        
    }
    console.log(row)
}

/*
1
12
123
1234
12345
*/
console.log("\n")

for(let  i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += j
    }
    console.log(row)
}

/*
1
22
333
4444
55555
*/
console.log("\n")

for(let  i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += i
    }
    console.log(row)
}

/*
12345
1234
123
12
1
*/
console.log("\n")

for(let  i = n; i >= 1; i--){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += j
    }
    console.log(row)
}

/*
54321
5432
543
54
5
*/
console.log("\n")

for(let  i = n; i >= 1; i--){
    let row = ""
    for(let j = i; j >= 1; j--){
        row += j
    }
    console.log(row)
}

/*
1
23
456
78910
*/
console.log("\n")
let num = 1
for(let  i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += num
        row += " "
        num++
    }
    console.log(row)
    row
}



/*
A
AB
ABC
ABCD
ABCDE
*/
console.log("\n")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += String.fromCharCode(65+j)
    }
    console.log(row)
}

/*
A
BB
CCC
DDDD
EEEEE
*/
console.log("\n")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += String.fromCharCode(65+i)
    }
    console.log(row)
}


/*
A
BC
DEF
GHIJ
KLMNO
*/
console.log("\n")
let num1 = 65
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += String.fromCharCode(num1)
        num1++
    }
    console.log(row)
}

/*
ABCDE
ABCD
ABC
AB
A
*/
console.log("\n")
for(let i = 5; i > 0; i--){
    let row = ""
    for(let j = 0; j < i; j++){
        row += String.fromCharCode(65+j)
    }
    console.log(row)
}


//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
// let n = 4
for(let i = 0; i < n; i++){
    let row = ""
    for(let s = 0; s < n-i; s++){
        row += " "
    }
    for(let j = 0; j < i; j++){
        row += String.fromCharCode(65 + j)
    }
    for(let j = i; j >= 0; j--){
        row += String.fromCharCode(65 + j)
    }
    console.log(row)
}


// E 
// D E 
// C D E 
// B C D E 
// A B C D E
// let n = 4
for(let i = 1 ; i <= n; i++){
    let row = ""
    for(let j = (65+n) - i; j < (65+n); j++){
        row += String.fromCharCode(j)
    }
    console.log(row)
}


/*
AAAAA
BBBBB
CCCCC
DDDDD
EEEEE
*/
console.log("\n")

for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < n; j++){
        row += String.fromCharCode(65+i)
    }
    console.log(row)
}


// your code here
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321
// let n = 5
for(let i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
        row += j
    }

    for(let s = 1; s <= 2 * (n - i); s++){
        row += " "
    }

    for(let j = i; j >= 1; j--){
        row += j
    }
    console.log(row)
}