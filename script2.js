//printing statement
//console.log()

// console.log("hello im javascript")
// console.log("hello im working");

// //firstway :
// //extension : coderunner .
// //Terminal  : node [filename].
// //browser : we can connect in browser .

// function bottelfilled() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("all watercan filled");
//     }, 5000);
//   });
// }
// function cleaningroom() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("roomcleaned");
//     }, 3000);
//   });
// }

// function Trash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("trash taken out");
//     }, 1000);
//   });
// }

// bottelfilled()
//   .then((value) => {
//     console.log(value);
//     return cleaningroom();
//   })
//   .then((value) => {
//     console.log(value);
//     return Trash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("all task complete");
//   });

function bottelfilled() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
        const bottlefilled = true 

        if(bottelfilled){
            resolve("watercan filled")
        }else{
            reject("waterbottle is not filled")
        }


    }, 5000);
  });
}



function cleaningroom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       const cleaningroom = true
          if(cleaningroom){
            resolve("room is cleaned")
          }else{
            reject("room is not cleaned")
          }
    }, 3000);
  });
}

function Trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashout = false
        if(trashout){
            resolve("Trash is out")
        }else{
            reject("trash is not taken out")
        }
    }, 1000);
  });
}

// bottelfilled().then(value => {console.log(value);return cleaningroom()})
//               .then(value => {console.log(value);return Trash()})
//               .catch(error => console.log(error))


async function task(){

 try{
     const waterbottle = await bottelfilled()
     console.log(waterbottle);
     
     const cleaningroom = await cleaningroom()
     console.log(cleaningroom);

     const trashes = await Trash()
     console.log(trashes);

 }catch(error){
    console.log(error);
    
 }


}