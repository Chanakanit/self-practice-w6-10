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
const warning = document.getElementsByClassName('warning')
if (warning.length > 0) {
    warning[0].remove()
}
console.log("Test 6: ", warning.length);


// Test 7: Change the background color of all .note elements to yellow
// ---------------------------------------------
[...note].forEach(el => { el.style.backgroundColor = 'yellow'})
console.log("Test 7: ", note[0].style.backgroundColor)


// Test 8: Toggle visibility of #secret (hide/show)
// ---------------------------------------------
const secret = document.getElementById('secret')
secret.classList.toggle('hidden')
console.log("Test 8: ", secret.classList);


// Test 9: Add class "highlight" to every .vegan item
// ---------------------------------------------
const vegan = document.getElementsByClassName('vegan')
Array.from(vegan).forEach(el => {
    el.classList.add('highlight')
    
})
console.log("Test 9: ", vegan);


// Test 10: Create a button that logs "Clicked!" when pressed
// ---------------------------------------------
const button = document.createElement('button');
button.textContent = 'button'
document.body.appendChild(button)


button.addEventListener('click', () => {
    console.log("Test 10: Clicked!");
    
})

console.log("Test 10: click button");


// Test 11: Replace "Beef Soup" with "Pork Soup"
// ---------------------------------------------
soup.firstElementChild.textContent = 'Pork Soup'
console.log("Test 11: ", soup.firstElementChild);


// Test 12: Count how many .meat items exist under #menu
// ---------------------------------------------
const meat = document.querySelectorAll('#menu .meat')
console.log("Test 12: ", meat.length);


// Test 13: Clone #appetizer and append it to the body
// ---------------------------------------------
const appetizer = document.getElementById('appetizer');
const cloneApp = appetizer.cloneNode(true)
document.body.appendChild(cloneApp)
console.log("Test 13: ", cloneApp);


// Test 14: Add attribute data-id="menu1" to #menu
// ---------------------------------------------
menu.setAttribute('data-id', 'menu1')
console.log("Test 14: ", menu.dataset);


// Test 15: Remove class "note" from the first element that has it
// ---------------------------------------------
note[0].remove()
console.log("Test 15: ", note[0]);

// Test 16: Prepend a new <li> “Soup of the Day” to #appetizer
// ---------------------------------------------
const liSoup = document.createElement('li')
liSoup.textContent = 'Soup of the Day'
appetizer.prepend(liSoup)
console.log("Test 16: ", appetizer.firstElementChild.textContent);


// Test 17: Wrap #menu inside a new <section>
// ---------------------------------------------
const section = document.createElement('section')
menu.parentNode.insertBefore(section, menu)
section.append(menu)
console.log("Test 17: ", section.firstElementChild);


// Test 18: Add a solid border around #menu
// ---------------------------------------------
menu.style.border = '1px solid'
console.log("Test 18: ", menu.style.border);


// Test 19: Log the innerHTML of #menu
// ---------------------------------------------

console.log("Test 19: ", menu.innerHTML);


// Test 20: Replace #secret with <p>“Secret Removed”</p>
// ---------------------------------------------
const pSecret = document.createElement('p')
pSecret.textContent = 'Secret Removed'
secret.parentNode.replaceChild(pSecret, secret)
console.log("Test 20: ", pSecret.textContent);


// Test 21: Add click event to each <li> in #menu to log its textContent
// ---------------------------------------------
Array.from(liMenu).forEach(el => {
    el.addEventListener('click', () => {
        console.log("test 21: ",el.textContent)
    })
})
console.log("Test 21: click li in menu");


// Test 22: Create 5 <li> (1–5) dynamically inside #dynamic
// ---------------------------------------------
const dynamic = document.getElementById('dynamic')
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li')
    li.textContent = i
    dynamic.appendChild(li)
}
console.log("Test 22: ", dynamic.children);


// Test 23: Check if #title has attribute data-id
// ---------------------------------------------
if (title.hasAttribute('data-id')){
    console.log('Test 23: title has attribute data-id')
} else{
    console.log('Test 23: title has not attribute data-id')
}


// Test 24: Change all text inside #appetizer to uppercase
// ---------------------------------------------
Array.from(appetizer.children).forEach(el => {
    el.textContent = el.textContent.toUpperCase();
    console.log("Test 24: ", el.textContent);
})



// Test 25: Remove all children of #dynamic
// ---------------------------------------------
Array.from(dynamic.children).forEach(el => {
    el.remove()
})
console.log("Test 25: ", dynamic.children);
