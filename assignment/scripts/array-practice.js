console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favFoods = ['spaghetti', 'dim sum', 'chips'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('Favorite foods are:', favFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of favorite foods:', favFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('The last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('The last animal is', animalArray[animalArray.length - 1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favFoods.push('pizza');
console.log('Added a food to end', favFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedfavFoods = favFoods.pop();
console.log('Removed the last food item', favFoods);
console.log('The favorite foods are now', favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favFoods.unshift('burger');
console.log('Added a food to beginning', favFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedfavFoods = favFoods.shift();
console.log('Removed the first food item', favFoods);
console.log('Favorite foods are now', favFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favFoods.splice(1, 1, 'burger');
console.log('Replaced second food, favorite foods are now', favFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

console.log('Sorted/reverse order of favorite foods');
favFoods.sort();
console.log('sorted', favFoods);
favFoods.reverse();
console.log('reverse', favFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.


console.log('Edited array to become a string');
let newArray = ['chips and burger and spaghetti'];
let newString = newArray.join(' and ');
console.log(newString);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
let favThings = [favFoods + animalArray];
console.log('Combined both arrays into one');
console.log(favThings);
//when combining already declared variables for fav food and animals, returns with single array
// noticed there is no spacing between the elements of "spaghetti and fish"?

favThings = favFoods.concat(animalArray);
console.log(favThings);

console.log('Now I am getting the song "boots and cats" stuck in my head');
//Found this concatenating function, it returns with combined array with proper spacing. 
// Is it still supposed to retain the string of "ands" between the food values?
// why did it work better in this function compared to stringing the declared variables together?