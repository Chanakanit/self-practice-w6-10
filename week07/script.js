// Test 1: Select the element with id "title" and log its textContent
const title = document.getElementById("title");
console.log("test 1: ", title.textContent);

// Test 2: Select all elements with class "note" and log their length
const note = document.getElementsByClassName("note");
console.log("test 2: ", note.length);

// Test 3: Select all <li> inside #menu and log their text
const menu = document.getElementById("menu");
const liMenu = menu.getElementsByTagName("li");
console.log(
  "test 3: ",
  [...liMenu].map((li) => li.textContent)
);

// Test 4: Change the textContent of #title to "DOM Mastery"
title.textContent = "DOM Mastery";
console.log("test 4: ", title.textContent);

// Test 5: Add a new <li> with text "Fish" to #menu'
let menuFish = document.createElement("li");
menuFish.textContent = "Fish";
menu.appendChild(menuFish);
console.log("test 5: ", menu.lastChild.textContent);

// Test 6: Remove the first element with class "warning"
const firstWarn = document.querySelector(".warning");
firstWarn.remove();
console.log("test 6: ", firstWarn);

// Test 7: Change the background color of all .note elements to yellow
[...note].forEach((n) => (n.style.backgroundColor = "yellow"));
console.log(
  "test 7: note[0].style.backgroundColor === 'yellow'",
  note[0].style.backgroundColor === "yellow"
);

// Test 8: Toggle #secret div between show/hide
const secret = document.getElementById("secret");
secret.style.display = secret.style.display === "none" ? "block" : "none";
console.log("test 8: ", secret.style.display);

// Test 9: Add class "highlight" to every <li> inside #appetizer
const liAppetizer = document.querySelectorAll("#appetizer li");
liAppetizer.forEach((li) => li.setAttribute("class", "highlight"));
console.log("test 9: ", liAppetizer[0]);

// Test 10: Create a button and append to body that logs "Clicked!" when pressed
const button = document.createElement("button");
button.textContent = "click me";
button.addEventListener("click", () => console.log("test 10: clicked!"));
document.body.appendChild(button);

// Test 11: Replace text of the second #appetizer li with "Salad (Fresh)"
liAppetizer[1].textContent = "Salad (Fresh)";
console.log("test 11", liAppetizer[1].textContent);

// Test 12: Count how many .meat items are inside #menu
console.log(
  "test 12: ",
  [...liMenu].filter((li) => li.classList.contains("meat")).length
);

// Test 13: Clone #appetizer list and append to body
const cloneApp = document.getElementById("appetizer").cloneNode(true);
document.body.appendChild(cloneApp);
console.log("test 13:", cloneApp.textContent);

// Test 14: Add attribute data-id="123" to #title
title.setAttribute("data-id", "123");
console.log("test 14: data-id =", title.getAttribute("data-id"));

// Test 15: Remove class "note" from the first element that has it
note[0].classList.remove("note");
console.log("test 15:", note[0].getAttribute("note"));

// Test 16: Prepend new <li>"Soup of the Day"</li> to #appetizer
const appetizer = document.getElementById("appetizer");
const liSoup = document.createElement("li");
liSoup.textContent = "Soup of the Day";
appetizer.appendChild(liSoup);
console.log("test 16", appetizer.lastChild.textContent);

// Test 17: Wrap #app element inside a new <section>
const app = document.getElementById("app");
const section = document.createElement("section");
app.parentNode.insertBefore(section, app);
section.appendChild(app);
console.log("test 17", section.innerHTML);

// Test 18: Add a border to #menu using style
menu.style.border = "1px solid";
console.log("test 18 : #menu border", menu.style.border);

// Test 19: Get innerHTML of #app and log it
console.log("test 19 app : ", app.innerHTML);

// Test 20: Replace #secret with <p>Secret Removed</p>
const pSec = document.createElement("p");
pSec.textContent = "Secret Removed";
secret.replaceWith(pSec);
console.log("test 20", pSec.textContent);

// Test 21: Add event listener to all li in #menu to log their text when clicked
[...liMenu].forEach((li) => {
  li.addEventListener("click", () => console.log("test 21:", li.textContent));
});

// Test 22: Dynamically create 5 <li> inside #dynamic with numbers 1-5
const dynamic = document.getElementById("dynamic");
for (let i = 1; i <= 5; i++) {
  const liDyna = document.createElement("li");
  liDyna.textContent = i;
  dynamic.appendChild(liDyna);
}
console.log("test 22: ", dynamic.innerHTML);

// Test 23: Check if #title has attribute data-id
console.log("test 23: ", title.hasAttribute('data-id'));

// Test 24: Change all text of #appetizer li to uppercase
document.querySelectorAll('#appetizer li').forEach(li => 
    li.textContent = li.textContent.toUpperCase()
)
console.log("test 24: ", appetizer.textContent);


// Test 25: Remove all children of #dynamic
while (dynamic.firstChild){
    dynamic.removeChild(dynamic.firstChild)
}
console.log("test 25: dynamic", dynamic.textContent);


