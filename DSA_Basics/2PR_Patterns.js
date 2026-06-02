/*
* * * *
* * * *
* * * *
* * * *
*/
// let n = 4
// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j < n; j++){
//         row += "* "
//     }
//     console.log(row)
// }


/*
*
* *
* * *
* * * *
*/
// let n = 4;
// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }


/*
* * * *
* * *
* *
*
*/
// let n = 4;
// for(let i = n; i >= 0; i--){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }

/*
      *
    * *
  * * *
* * * *
*/

// let n = 4;
// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let s = 1; s < n-i; s++){
//         row += " "
//     }
//     for(let j = 0; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// }



/*
      *
    * * *
  * * * * *
* * * * * * *
*/

// let n = 7;
// for(let i = 0; i < n; i+=2){
//     let row = ""
//     for(let s = 1; s < n-i; s++){
//         row += " "
//     }
//     for(let j = 0; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }

// let n = 4
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let s = 1; s <= n-i; s++){
//         row += " "
//     }
//     for(let j = 1; j <= 2*i -1; j++){
//         row += "*"
//     }
//     console.log(row)
// }



/*
   * 
  * * 
 * * * 
* * * * 
*/

// let n = 4;
// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let s = 1; s < n-i; s++){
//         row += " "
//     }
//     for(let j = 0; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }



/*
    *
   * *
  *   *
 *     *
*/

let n = 4
for(let i = 1; i <= n; i++){
    let row = "";
    for(let s = 1; s <= n-i; s++){
        row += " "
    }
    for(let j = 1; j <= 2*i -1; j++){
        if(j == 1 || j == 2*i -1 || i == 1 || i == n){
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
  ***
 *****
*******
 *****
  ***
   *
*/

// let n = 4
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let s = 1; s <= n-i; s++){
//         row += " "
//     }
//     for(let j = 1; j <= 2*i -1; j++){
//         row += "*"
//     }
//     console.log(row)
// }

// for(let i = n-1; i >= 1; i--){
//     let row = "";
//     for(let s = 1; s <= n-i; s++){
//         row += " "
//     }
//     for(let j = 2*i -1; j >= 1; j--){
//         row += "*"
//     }
//     console.log(row)
// }



/*
****
*  *
*  *
****
*/

// let n = 4
// for(let i = 1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= n; j++){
//         if(j == 1 || j == n || i == n || i == 1){
//             row += "*"
//         }
//         else{
//             row += " "
//         }
//     }
//     console.log(row)
// }




/*

*/