module.exports = function(){
	return {
    greet: function(){
        console.log("we are now using a module!");
    },
    add: function(num1, num2){
    	console.log('the sum is ', num1 + num2)
    },
    multiply: function(num1, num2){
    	console.log(num1 * num2)
    },
    square: function(num1){
    	console.log(num1 * num1)
    },
    random: function(num1, num2){
    	let rand = Math.floor((Math.random() * num2) + num1)
    	console.log(rand)
    }
}
}
