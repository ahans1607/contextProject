/***********************************************************************
Below we've declared a Calculator constructor function that has a property
representing the total - which is initialized to 0. This time around we'll
make our calculator a bit fancier! Let's first add some new functionality.

Write two methods on the Calculator's prototype named:
1. modulo(num) - sets the total to the remainder of division with the arg number
2. squared() - multiplies the total by its self

***********************************************************************/

function FancyCalculator() {
	this.total = 0;
	this.squared = function(num){
		return Math.pow(this.total, 2)
	}
	this.modulo = function(num) {
		return this.total %= num	
	}
}

FancyCalculator.prototype.setTotal = function(num) {
	this.total = num;
	return this.total;
}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)) // => returns 5
console.log(fancyCalculator.squared()) // => returns 25
console.log(fancyCalculator.modulo(4)) // => returns 1
console.log(fancyCalculator.total) // => returns 1

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = FancyCalculator;
