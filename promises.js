const myFavMeals = [
    "Rice and Peppersoup",
    "chips and Ketchup", 
    "Banana"
];

function favFruit(){
    return myFavMeals[2];
}

let myFirstPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(favFruit());
    }, 100);
  });
  
  myFirstPromise.then(function(value) {
    console.log("Your favorite fruit is found!!");
  });

  myFirstPromise.catch(function(value){
      console.log("Fruit not found");
  });

console.log(myFavMeals);
console.log(favFruit())
