
document.write(`<h3>(1)Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.</h3>`)
var firstName = prompt("Enter a First Name");
var LastName = prompt("Enter a Last Name");
document.write(`${firstName.toUpperCase()}  ${LastName.toUpperCase()}`);

document.write(`<h3>(2) Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser.</h3>`)
var userInput = prompt('Enter A Fourite Mobile Phone Model');
document.write(`<p>My favorite phone is:${userInput}</p>`)
document.write(`<p>Length of string:${userInput.length}</p>`);

document.write(`<h3>(3) Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .</h3>`)
var nationality = 'Pakistani';
var indexofN = nationality.indexOf("n");
document.write(`<p>String:${nationality}</p>`);
document.write(`<p>Index of 'n' = ${indexofN}</p>`);

document.write(`<h3>(4) Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.</h3>`)
var strg = 'Hello World';
var indexofN = strg.lastIndexOf('l');
document.write(`<p>String:${strg}</p>`);
document.write(`<p>Last index of 'l' : ${indexofN}</p>`);


document.write(`<h3>(5) Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser..</h3>`)

var national = 'Pakistani';
document.write(`<p>String:${national}</p>`);
document.write(`<p>Character at index 3 = ${national[3]}</p>`);

document.write(`<h3>(6) Repeat Q1 using string concat() method...</h3>`)
var str = 'Muzammil';
var strOne = 'Mansoori';
var result = str.concat(' ', strOne);
document.write(result);


document.write(`<h2>(7) Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.</h2>`)
var city = 'Hyderabad';
var replaceCity = city.replace('Hyder' , 'Islam');
document.write(`City: ${city}`);
document.write(`After Replacement: ${replaceCity}`);



document.write(`<h2>(8) Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.</h2>`);
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var replaceMessage = message.replaceAll('and' , '&');
document.write(`Message: ${message}`);


document.write(`<h2>(9) Write a program that converts a string “472” to a number
472. Display the values & types in your browser.</h2>`);
var str = '472';
var num = parseInt(str);
document.write(`Value: ${str} <br> Type: ${typeof str}`);
document.write(`<br>Value: ${num} <br> Type: ${typeof num}`);


document.write(`<h2>(10) Write a program that takes user input. Convert and show the input in capital letters.</h2>`);
var userInput = prompt('Enter any word');
var upperCase = userInput.toUpperCase();
document.write(`User Input: ${userInput} <br> Upper Case: ${upperCase}`);


document.write(`<h2>(11) Write a program that takes user input. Convert and show the input in title case.</h2>`);
var userInput = prompt('Enter any word');
var firstChar = userInput.slice(0,1);
var otherChar = userInput.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var titleCase = firstChar + otherChar;
document.write(`User Input: ${userInput} <br> Title Case: ${titleCase}`);


document.write(`<h2>12. Write a program that converts the variable num to string.</h2>`);
document.write(`<h2>var num = 35.36 ;</h2>`);
document.write(`<h2>Remove the dot to display “3536” display in your browser.</h2>`);
var num = 35.36;
var str = num.toString();
var result = str.replace('.' , '');
document.write(`Number: ${num} <br> Result: ${result}`);

document.write(`<h2>13. Write a program to take user input and store username</h2>`);
dovcument.write(`<h2>in a variable. If the username contains any special symbol</h2>`)
dovcument.write(`<h2>among [@ . , !], prompt the user to enter a valid username.</h2>`)
dovcument.write(`<h2>For character codes of [@ .</h2>`)


dovcument.write(`<h2>14. You have an array</h2>`);
dovcument.write(`<h2>A = [cake”, “apple pie”, “cookie”, “chips”, “patties”].</h2>`)
dovcument.write(`<h2>Write a program to enable “search by user input” in an.</h2>`)
dovcument.write(`<h2>array. After searching, prompt the user whether the givendovcument.write<h2>`);
dovcument.write(`<h2>item is found in the list or not..</h2>`)
dovcument.write(`<h2>Note: Perform case insensitive search. Whether the user.</h2>`)
dovcument.write(`<h2>enters cookie, Cookie, COOKIE or coOkIE, program.</h2>`)
dovcument.write(`<h2>should inform about its availability. Example:.</h2>`)
 var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var userInput = prompt('Welcome to ABC Bakery. What do you want to order sir/maam?');
    var userInput = userInput.toLowerCase();
    var flag = false;
    for (var i = 0; i < a.length; i++) {
        if (userInput === a[i]) {
            flag = true;
            document.write(`${userInput} is available at index ${i} in our bakery`);
            break;
        }
    }
    if (flag === false) {
        document.write(`We are sorry. ${userInput} is not available in our bakery`);
    }

document.write(`<h2>16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.</h2>`);

var sttrgvar = 'University of Karachi';
var university = sttrgvar.split;
document.write(`${university}`);


document.write(`<h2>17. Write a program to display the last character of a user
input.</h2>`);
var userInput = prompt('Enter a Country');
var lastCharac = userInput.charAt(7);
document.write(`<p>User Input : ${userInput}</p>`);
document.write(`<p>Last character of input: ${lastCharac}</p>`);

document.write(`<h2>18. You have a string “The quick brown fox jumps over the</h2>`);
document.write(`<h2>lazy dog”. Write a program to count number of</h2>`);
document.write(`<h2>occurrences of word “the” in given string.</h2>`);

var text = "The quick brown fox jumps over the lazy dog";
var count = 0;
for(var i = 0; i < text.length; i++){
    if (text.charAt(i).toLowerCase() == 'the') {
        count++
    }
}
document.write(`<p>The quick brown fox jumps over the lazy dog</p>`);
document.write(`<p>There are ${count} occurrence(s) of word 'the'</p>`);
    


