let cities = ["Kiruna", "Stockholm", "Gothenburg"];

const randomIndex = Math.floor(Math.random() * cities.length) ;

const removedCity = cities.splice(randomIndex, 1)[0];

console.log('Removed city')
console.log('Remaining citites')
