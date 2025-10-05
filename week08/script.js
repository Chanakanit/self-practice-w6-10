// Test 1: Select the element with id "title" and log its textContent
// ---------------------------------------------
const title = document.getElementById('title')
console.log("Test 1: ", title.textContent);


// Test 2: Select all elements with class "note" and log their length
// ---------------------------------------------
const note = document.querySelectorAll('.note')
console.log("Test 2: ", note.length);


// Test 3: Select all <li> under #menu and log their text
// ---------------------------------------------
const menu = document.getElementById('menu')
const liMenu = menu.getElementsByTagName('li')
console.log("Test 3: ", liMenu)

// Test 4: Change the textContent of #title to "DOM Mastery"
// ---------------------------------------------
title.textContent = 'DOM Mastery'
console.log("Test 4: ", title.textContent);


// Test 5: Add a new <li> "Fish Soup" under #soup
// ---------------------------------------------
const soup = document.getElementById('soup')
const fishSoup = document.createElement('li')
fishSoup.textContent = 'Fish Soup'
soup.appendChild(fishSoup)
console.log("Test 5: ", soup.lastChild.textContent);


// Test 6: Remove the first element with class "warning"
// ---------------------------------------------
const warning = document.getElementsByClassName(warning)
warning.remove()
console.log("Test 6: ");


// Test 7: Change the background color of all .note elements to yellow
// ---------------------------------------------
console.log("Test 7: ");


// Test 8: Toggle visibility of #secret (hide/show)
// ---------------------------------------------
console.log("Test 8: ");


// Test 9: Add class "highlight" to every .vegan item
// ---------------------------------------------
console.log("Test 9: ");


// Test 10: Create a button that logs "Clicked!" when pressed
// ---------------------------------------------
console.log("Test 10: ");


// Test 11: Replace "Beef Soup" with "Pork Soup"
// ---------------------------------------------
console.log("Test 11: ");


// Test 12: Count how many .meat items exist under #menu
// ---------------------------------------------
console.log("Test 12: ");


// Test 13: Clone #appetizer and append it to the body
// ---------------------------------------------
console.log("Test 13: ");


// Test 14: Add attribute data-id="menu1" to #menu
// ---------------------------------------------
console.log("Test 14: ");


// Test 15: Remove class "note" from the first element that has it
// ---------------------------------------------
console.log("Test 15: ");


// Test 16: Prepend a new <li> “Soup of the Day” to #appetizer
// ---------------------------------------------
console.log("Test 16: ");


// Test 17: Wrap #menu inside a new <section>
// ---------------------------------------------
console.log("Test 17: ");


// Test 18: Add a solid border around #menu
// ---------------------------------------------
console.log("Test 18: ");


// Test 19: Log the innerHTML of #menu
// ---------------------------------------------
console.log("Test 19: ");


// Test 20: Replace #secret with <p>“Secret Removed”</p>
// ---------------------------------------------
console.log("Test 20: ");


// Test 21: Add click event to each <li> in #menu to log its textContent
// ---------------------------------------------
console.log("Test 21: ");


// Test 22: Create 5 <li> (1–5) dynamically inside #dynamic
// ---------------------------------------------
console.log("Test 22: ");


// Test 23: Check if #title has attribute data-id
// ---------------------------------------------
console.log("Test 23: ");


// Test 24: Change all text inside #appetizer to uppercase
// ---------------------------------------------
console.log("Test 24: ");


// Test 25: Remove all children of #dynamic
// ---------------------------------------------
console.log("Test 25: ");
