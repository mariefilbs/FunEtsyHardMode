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
var answer2 = document.getElementById("answer2");

var costBetween = function (items) {
    var newArray = items.map(function(items){items.price  > 14 && items.price <  18;})
  answer2.innerHTML = items.title + " costs " + "&pound" + items.price;
}
costBetween(items);

//3.Which item has a "GBP" currency code? Display it's name and price.


//4.Display a list of all items who are made of wood.


//5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.


//6.How many items were made by their sellers?
