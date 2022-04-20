let carMakes = ['Honda', 'Toyota', 'Ford', 'Nissan', 'Lexus']

let ownerCar = [
{
  brand: 'Honda',
  model: 'Civic',
  color: 'red',
  year: 2008,
  type: 'Sedan',
  miles: 165764
},
{
  brand: 'Honda',
  model: 'Accord',
  color: 'gold',
  year: 2016,
  type: 'Sedan',
  miles: 67438 
}]

// Which item is being shown
// console.log(carMakes[2])
// How many items are in the array
console.log(carMakes.length)

currentYear =  new Date().getFullYear();
// console.log(currentYear)

const { miles, year } = ownerCar[0]

const carYear = currentYear - year
console.log(carYear)
const carMileage = (miles / carYear).toFixed(2)
// console.log(carMileage.toFixed(2))
console.log(`You have driven the car, ${carMileage} miles each YEAR`)

// console.log(ownerCar[1].miles)


// Ternary

let ternary = carMileage < 10000 ? 'This is a LOW mileage car' : 'This is NOT a low mileage car'
console.log(ternary)

// console.log(ownerCar)
const convertToJSON = JSON.stringify(ownerCar)
// console.log(convertToJSON)
const convertToObject = JSON.parse(convertToJSON)
console.log(convertToObject)

