/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);
console.log("pet");


/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
var firstName = "Keola";
console.log(firstName);
var lastName = "Stone";
console.log(lastName);
var birthPlace = "Honolulu";
console.log(birthPlace);
var favoriteFood = "Lasagna";
console.log(favoriteFood);
var bestMovie = "Hunt for Red Oktober";
console.log(bestMovie);




/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
var favoriteNumber = 8
console.log(favoriteNumber);
var currentYear = 2017;
console.log(currentYear);
var thatOnePrinceSong = 1999;
console.log(thatOnePrinceSong);
var tokyoOlympics = 1964;
console.log(tokyoOlympics);
var mariahCareyAge = 82
console.log(mariahCareyAge);
var studentsInClass = 10;
console.log(studentsInClass);
var numOfJapanPrefectures = 47
console.log(numOfJapanPrefectures);
var currentIphoneModel = 7
console.log(currentIphoneModel);
var shoeSize = 11
console.log(shoeSize);



/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcDonalds = true;
console.log("likesMcDonalds",likesMcDonalds);
var watchedMrRobot = true;
console.log("watchedMrRobot",watchedMrRobot);
var ranMarathon = false;
console.log("ranMarathon",ranMarathon);
var wrestledABear = true;
console.log("wrestledABear",wrestledABear);
var lovesDonuts = true;
console.log(lovesDonuts);
var readHarryPotter = false;
console.log(readHarryPotter); /*I only watched the movies :(*/
var sleptInClass = false;
console.log(sleptInClass);
var drinksCoffee = true;
console.log(drinksCoffee);
var shopsAtWholeFoods = false;
console.log(shopsAtWholeFoods);
var ownsRedShoes = false;
console.log(ownsRedShoes);


/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass = null;
console.log(completedPrepClass);
var traveledToMars = null;
console.log(traveledToMars);
var scoredTDinNFL = null;
console.log(scoredTDinNFL);


/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/

/* A null is an intentional ansence of an object.  Undefined is something doesn't exist, either through a statement that cannot be defined or an 
* a value that just doesn't exist.  A null exists and undefined does not exist.
*/

var potato;
console.log(potato);
var potato = null;
console.log(potato);

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
var plateLunch = ["Chicken Katsu","Spicey Garlic Chicken","Meat Jun","Sushi","Manapua"];
console.log( plateLunch [3]);
var fruitBasket = ["Banana","Apple","Mango","Orange","Tangerine"];
console.log( fruitBasket [1]);
var westCoast = ["Washington","Oregon","California"];
console.log( westCoast [0]);
var lotteryResult = ["28","52","18","35","45"];
console.log( lotteryResult [3]);
// The following are just stuff I was trying to learn.  Still having a hard time with nested arrays.
//var duets0 = ["Han Solo","Chewy"];
//var duets1 = ["Dead","Pool"];
//var duets2 = ["Key","Peele"];
//console.log( duets0[0]);
/**var duets = [{name: "Nah Olos and Chunky"}, {name: "Alive and Puddle"}, {name: "Door and Lemony"};
console.log(duets[0]);**/
var duets = [["Han Solo","Chewy"],["Dead","Pool"],["Key","Peele"]];
console.log("duets",duets[1][0]);
var mixPlate = ["Doggy","SaltnPepa","Toni Braxton","Fishy","Semper"];
console.log(mixPlate[1]);

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/
var partyList = ["carrot cake","rocky road ice cream","mochiko chicken","orange tang","lemon bars"];
partyList.length
console.log(partyList.length);
console.log( partyList [0]);
console.log( partyList [4]);



/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/
var fullName = firstName + " " + lastName;
console.log(fullName);
var birthPlace = "Molokai";
console.log(birthPlace);
var whereFrom = fullName + " is from " + birthPlace;
console.log(whereFrom);
 
var favSneaker = "slippahs"; 
var favLoveSong = "Shoop"; //to my fellow SaltnPepa luvahs!!//
var coffeeShop = "karaoke hut.  You know the one down Kapahulu?  Not that one, the other one on Beretania or Young St. Oh, I think 8 Fat Fat 8." //had some good times down there!//
var mariahStory = "At the age of " + mariahCareyAge + ", " + "Mariah Carey, wearing her fancy " + favSneaker + ", " + "sang " + favLoveSong + " at the " + coffeeShop + ".";
console.log(mariahStory);


/**
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
**/
var num1 = 5;
console.log(num1);
var num2 = 8;
console.log(num2);
var sum = num1 + num2;
console.log(sum);
var difference = num2 - num1;
console.log(difference);
var product = num1 * num2;
console.log(product);
var quotient = num2 / num1;
console.log(quotient);
//num2 % num1;
console.log(num2 % num1);






/**
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
**/

var isEqual = "Tacocat" === "tacocat";
console.log(isEqual);
var isEqual = "Tacocat" == "tacocat";
console.log(isEqual);
var isEqual = "Tacocat" == "TacocaT"
console.log(isEqual);
/** I received a "false" for both comparisons.  I know the === had to be a strictly equal. I did not foresee that == would come out as false as well
since the only thing different was the first lower case "t" in "tacocat". I tried different variations like capatilizing the last letter "TacocaT" or the
separation of the word "Taco cat" and it still came out false.  Hmm. Maybe there is some sort of threshold that needs to be defined?**/

/**
* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?
**/
var compareTwo = 3>2 || 3<1;
console.log(compareTwo);
var compareThree = 3>2 && 6>3;
console.log(compareThree);
var compareFour = 7>2 && 8<5;
console.log(compareFour);

/** The or operator will return true if either operation is true.
the and operator will return true if both values are true. Otherwise 
return a false. Equation one returned false due to 3<1 is false.
Equation two returned true because both values were true.
Equation three returned false because 8<5 is false.**/



/**
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
**/
var myBox = 8;
console.log(myBox);
myBox = 10;
console.log(myBox);
myBox = 15;
console.log(myBox);
myBox = 3;
consolecdcd.log(myBox);
myBox = 6;
console.log(myBox);
myBox = 88;
console.log(myBox); 
myBox++;
console.log("myBox++",myBox);



/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/
function bakePie(ingredient){
	return "Today's special "+ ingredient + " pie.";
}
//var ingredient = "blueberry";
//bakePie(blueberry);
var pieResults = bakePie("blueberry");
console.log(pieResults)

function jump(height){
	return "You jumped " + height +" feet high!";
}
var jumpResult = jump(9);
console.log(jumpResult);

function cook(ingredient1, ingredient2, recipe){
	return ingredient1 + " and " + ingredient2 + " make a " + recipe+"!";
}
var dinner = cook("Tomatoes","Potatoes","Chimichanga");
console.log(dinner);