
booleanArray = [true, false, false, true, false, false, false, true, true, true, false]

let carModel = {
   make: 'Ford',
   model: 'Fiesta'
}

function addNumers(number1, number2) {
   const result = number1 +  number2
   return result
}

const addition = addNumers(12, 24)
console.log(addition)

function showTrueValues(givenArray) {
   let trueValues = 0;

   for (let i = 0; i < givenArray.length; i++) {
      const eachBool = givenArray[i]
      // console.log(eachBool)
      
      if(eachBool === true) {
         // console.log(eachBool)
         trueValues++
      }
   }
   // console.log(trueValues)
   return trueValues
}

console.log("The 'true' values in the array: ", showTrueValues(booleanArray))

function showObject(carModel) {
   console.log(carModel)

}

const showCar = showObject(carModel)

// booleanArray = [true, false, false, true, false, false, false, true, true, true, false]
function getFirstElement(givenArray) {
   let firstElement = 0
   // if (givenArray !== undefined && givenArray > 0) {
   //    return givenArray[0]   
   // }
   for (let index = 0; index <= givenArray.length; index++){
      firstElement = givenArray[index]
      console.log(firstElement)
      // if (givenArray[index] === true) {
      //   firstElement = givenArray[0]
      // }
   }

   return firstElement
}

const firstElement = getFirstElement(booleanArray)
// console.log(firstElement)
