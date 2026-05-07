// //task 1 a n x n square pattern using "*"

let n = 4
// for(let i = 0 ; i < n; i++){
//     let row = ""
//     for(let j = 0; j < n; j++){
//         row += "* "
//     }
//     console.log(row)

// }

// // task 2 right angle triangle pattern
// for(let i = 1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }

// // task 3 right angle triangle n = 4
// for(let i = 1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= n - i + 1; j++){
//         row += "* "
//     }
//     console.log(row)
// }











//task 4 
/*     
       *
     * *
   * * *
 * * * *
 
*/

// // let n = 4 
// for(let i = 1; i <= n; i++){
//     let row = ""
//     for (let j = 1; j <= n - i ; j++){
//         row += "  "
//     }
    
//     for(let k = 1; k <= i; k++){
//         row += "* "
//     }
//     console.log(row)
// }





//task pyramid pattern
/*
       *
     * * *
   * * * * *
 * * * * * * *
 
*/
// for (let i =  1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= n - i; j++){
//         row += " "
//     }

//     //1,3,5,7
//     for(let k = 1; k <=  i ; k++){
//         row += "* "
//     }
//     console.log(row)
// }


// for (let i =  1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= n - i; j++){
//         row += "  "
//     }
//       //1,3,5,7
//     for(let k = 1; k <= 2 * i - 1; k++){
//         row += "* "
//     }
//     console.log(row)
// }




//task 6 : hollow pyramid pattern
/*
         *
        * *
       *   *
      *     *
*/
// for(let i = 1; i <= n; i++){
//     let row = ""
//     for(let j = 1; j <= n - i; j++){
//         row += "  "
//     }
//     for(let k = 1; k <= 2 * i - 1; k++){
//         if(k == 1 || k == 2 * i - 1 ){
//             row += "* "
//         }else{
//             row += "  "
//         }
//     }
//     console.log(row)
// }

for (let i =  1; i <= n; i++){
    let row = ""
    for(let j = 1; j <= n - i; j++){
        row += " "
    }
    for(let k = 1; k <=  i ; k++){
        if(k==1 || k == i){
            row += "* "
        }else{
            row += "  "
        }
        // row += "* "
    }
    console.log(row)
}