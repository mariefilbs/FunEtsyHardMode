//1.Show me how to calculate the average price of all items.
var answer1 = document.getElementById("answer1");
var total = 0;

var findAvg = function() {
  items.forEach(function(items) {total = items.price + total;})
     var avg = total/items.length
     answer1.innerHTML = "The average price is $" + avg.toFixed(2);
}
findAvg();

//2.Show me how to get an array of items that cost between $14.00 and $18.00 USD

//basic logic seems right but need to think through it again

var answer2 = document.getElementById("answer2");

  var costBetween = items.filter(function(items){return items.price > 14 && items.price < 18;});
    costBetween.forEach(function(items){answer2.innerHTML += items.title;});


//3.Which item has a "GBP" currency code? Display it's name and price.
var answer3 = document.getElementById("answer3");

  var findGBP = items.filter(function(items){return items.currency_code === "GPB"});
    findGBP.forEach(function(items){answer3.innerHTML = items.title + " cost " + "#pound" + items.price;});


//4.Display a list of all items who are made of wood.
var answer4 = document.getElementById("answer4")

  var woodArray = items.filter(function(items){return items.materials.includes("wood");});
    woodArray.forEach(function(items){answer4.innerHTML += "<p>" + items.title + " is made of wood." + "</p>";});

//5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.


//6.How many items were made by their sellers?
