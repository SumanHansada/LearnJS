// Dyanmic behaviour of JavaScript Variables
// var a = 'Suman';
// console.log(`Type of a is :- ${typeof(a)} and value of a is - ${a}`);
// a = 25;
// console.log('Type of a is :- ' + typeof(a) + ' and value of a is - ' + a);

// Concatanation (+) property of JavaScript
// var a = 10;
// var b = 20;
// var c = a + b;      //number + number = sum
// console.log(c);

// var a = "Suman ";
// var b = "Kumar";
// var c = a + b;      //string + string = concatenate
// console.log(c);

// var a = "19";
// var b = 94;
// var c = a + b;      //string + number = concatenate (number part is converted to string)
// console.log(c);

// In case of minus (-)
// var a = "35";
// var b = 10;
// var c = a - b;      // string - number = number (string is converted to number on minus operation)
// console.log(c);

// // Strings in JavaScript
// var string1 = "Hello";
// var string2 = 'World!';
// var result = string1 + " "  + string2;
// console.log(result);
// var resultConcat = string1.concat(" ", string2, " - Suman");
// // (method) String.concat(...strings: string[]): string
// // Returns a string that contains the concatenation of two or more strings.
// console.log(resultConcat);
// console.log("Welcome to \'India\'");
// // String Properties !
// console.log(resultConcat.toUpperCase());
// console.log(resultConcat.toLowerCase());
// console.log(resultConcat.length);
// // Remove WhiteSpaces !
// var str1 = " AB ";
// var str2 = " CD ";
// console.log(str1.trim() + str2.trim());
// // (method) String.trim(): string
// // Removes the leading and trailing white space and line terminator characters from a string.
// console.log(resultConcat.replace('Suman', 'Suchitra'));
// // (method) String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)
// // Replaces text in a string, using a regular expression or search string.
// var myString = "There is a Blue bottle with a blue liquid on a blue table";
// var res1 = myString.replace(/blue/g, "green");
// // Regular Expression don't need to inside '' marks. 
// // g denotes global replacement with case sensitive match. Here Blue is not replaced.
// console.log(res1);
// var res2 = myString.replace(/blue/gi, "green");
// // gi denotes global replacement with case insensitive match. Here Blue is also replaced. 
// console.log(res2);

// Substrings in JavaScript
// 3 Methods :- substring(), substr(), slice()
// var strTest = "Hello, My Name is Suman";
// console.log(strTest);

// var resSubStrTest1 = strTest.substring(0, 10);
// console.log(resSubStrTest1);
// // (method) String.substring(start: number, end?: number): string
// // Returns the substring at the specified location within a String object.
// // @param start — The zero-based index number indicating the beginning of the substring.
// // @param end
// // Zero-based index number indicating the end of the substring. 
// // The substring includes the characters up to, but not including, the character indicated by end. 
// // If end is omitted, the characters from start through the end of the original string are returned.
// // Also if the value of start @param is greater than the value of end @param then
// // start will be used as end and end will be used as start.

// var resSubStrTest2 = strTest.substr(0, 5); // strTest.substr(0, -1) returns empty string.
// console.log(resSubStrTest2);
// // (method) String.substr(from: number, length?: number): string
// // Gets a substring beginning at the specified location and having the specified length.
// // @param from — The starting position of the desired substring. The index of the first character in the string is zero.
// // @param length — The number of characters to include in the returned substring.

// var resSubStrTest3 = strTest.slice(0, 5);
// console.log(resSubStrTest3);
// // (method) String.slice(start?: number, end?: number): string
// // Returns a section of a string.
// // @param start — The index to the beginning of the specified portion of stringObj.
// // @param end
// // The index to the end of the specified portion of stringObj. 
// // The substring includes the characters up to, but not including, the character indicated by end. 
// // If this value is not specified, the substring continues to the end of stringObj. 

// var resSubStrTest4 = strTest.indexOf(',');
// console.log(resSubStrTest4);
// // (method) String.indexOf(searchString: string, position?: number): number
// // Returns the position of the first occurrence of a substring.
// // @param searchString — The substring to search for in the string
// // @param position — The index at which to begin searching the String object. 
// // If omitted, search starts at the beginning of the string.

// var resSubStrTest5 = strTest.lastIndexOf('a');
// console.log(resSubStrTest5);
// // (method) String.indexOf(searchString: string, position?: number): number
// // Returns the position of the first occurrence of a substring.
// // @param searchString — The substring to search for in the string
// // @param position — The index at which to begin searching the String object. 
// // If omitted, search starts at the beginning of the string.
