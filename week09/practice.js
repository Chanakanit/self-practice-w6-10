// Test 1: Log "DOM ready" when DOMContentLoaded fires
document.addEventListener("DOMContentLoaded", () => console.log("Test 1: DOM ready!"));

// Test 2: Log "All loaded" when all resources finished loading
window.addEventListener("load", () => console.log("Test 2: All resources loaded!"));

// Test 3: Add click event to #submitBtn → log "Button clicked"
document.getElementById("submitBtn").addEventListener("click", () => console.log("Test 3: Button clicked!"));

// Test 4: Add mouseover event to #title → log “Hovered title!”
document.getElementById("title").addEventListener("mouseover", () => console.log("Test 4: Hovered title!"));

// Test 5: When user types in #message → log each key pressed
document.getElementById("message").addEventListener("keyup", e => console.log("Test 5:", e.key));

// Test 6: Add focus + blur event to #fname → log entering/leaving input
const fname = document.getElementById("fname");
fname.addEventListener("focus", () => console.log("Test 6: Focus on first name"));
fname.addEventListener("blur", () => console.log("Test 6: Left first name"));

// Test 7: When #lname is empty on blur → alert warning
document.getElementById("lname").addEventListener("blur", e => {
  if (e.target.value.trim() === "") console.log("Test 7: Last name empty!");
});

// Test 8: Show current window width/height when resized
window.addEventListener("resize", () => console.log("Test 8:", window.innerWidth, "x", window.innerHeight));

// Test 9: Show scroll position when page scrolls
window.addEventListener("scroll", () => console.log("Test 9: Scroll Y =", window.scrollY));

// Test 10: Click .red → change color to pink
document.querySelector(".red").addEventListener("click", e => {
  e.target.style.backgroundColor = "pink";
  console.log("Test 10: Changed red box to pink");
});

// Test 11: Mouseover #info → log "mouse over info"
document.getElementById("info").addEventListener("mouseover", () => console.log("Test 11: mouse over info"));

// Test 12: Demonstrate bubbling — add click to .box and #colorBoxes
document.querySelector(".green").addEventListener("click", e => console.log("Test 12: green box clicked"));
document.getElementById("colorBoxes").addEventListener("click", () => console.log("Test 12: parent container clicked"));

// Test 13: Demonstrate capturing
document.body.addEventListener("click", () => console.log("Test 13: body capturing"), true);
document.querySelector(".blue").addEventListener("click", () => console.log("Test 13: blue clicked"), true);

// Test 14: Add double click to #title → toggle .hidden on #menu
document.getElementById("title").addEventListener("dblclick", () => {
  document.getElementById("menu").classList.toggle("hidden");
  console.log("Test 14: toggled menu visibility");
});

// Test 15: Keydown Enter on #message → log “Enter pressed!”
document.getElementById("message").addEventListener("keydown", e => {
  if (e.key === "Enter") console.log("Test 15: Enter pressed!");
});

// Test 16: Create handler function and remove it after one click
const handler = () => console.log("Test 16: Click only once");
document.getElementById("removeBtn").addEventListener("click", handler);
document.getElementById("removeBtn").addEventListener("click", () => {
  document.getElementById("removeBtn").removeEventListener("click", handler);
  console.log("Test 16: listener removed");
});

// Test 17: Log event.target and event.currentTarget when clicking .box
document.querySelectorAll(".box").forEach(b => b.addEventListener("click", e => {
  console.log("Test 17:", e.target.className, e.currentTarget.className);
}));

// Test 18: Add right-click event (contextmenu) on #menu → prevent default
document.getElementById("menu").addEventListener("contextmenu", e => {
  e.preventDefault();
  console.log("Test 18: Right-click prevented!");
});

// Test 19: Mousemove inside #info → show X/Y
document.getElementById("info").addEventListener("mousemove", e => {
  console.log("Test 19: Mouse X:", e.clientX, "Y:", e.clientY);
});

// Test 20: Add three event listeners to #submitBtn
const btn = document.getElementById("submitBtn");
btn.addEventListener("click", () => console.log("Test 20: first"));
btn.addEventListener("click", () => console.log("Test 20: second"));
btn.addEventListener("click", () => console.log("Test 20: third"));

// Test 21: Add input event to #message to mirror text into #info
document.getElementById("message").addEventListener("input", e => {
  document.getElementById("info").textContent = e.target.value;
});

// Test 22: Add click event to <li> that logs its text
document.querySelectorAll("#menu li").forEach(li => li.addEventListener("click", () => console.log("Test 22:", li.textContent)));

// Test 23: Add capturing listener to document logging “capturing phase”
document.addEventListener("click", () => console.log("Test 23: capturing phase"), true);

// Test 24: Use once:true → event triggers only once
document.body.addEventListener("click", () => console.log("Test 24: triggered once"), { once: true });

// Test 25: Keyup event log which key and code pressed
document.addEventListener("keyup", e => console.log("Test 25:", e.key, e.code));

// Test 26: Mouseout from .green → log message
document.querySelector(".green").addEventListener("mouseout", () => console.log("Test 26: left green box"));

// Test 27: Add event delegation on #menu (log li text when clicked)
document.getElementById("menu").addEventListener("click", e => {
  if (e.target.tagName === "LI") console.log("Test 27: delegated click on", e.target.textContent);
});

// Test 28: Scroll window → change title color
window.addEventListener("scroll", () => document.getElementById("title").style.color = "purple");

// Test 29: When mouse enters body → change background
document.body.addEventListener("mouseenter", () => document.body.style.backgroundColor = "#f0f0f0");

// Test 30: When mouse leaves window → log "Goodbye!"
window.addEventListener("mouseout", e => {
  if (!e.relatedTarget && !e.toElement) console.log("Test 30: Goodbye!");
});
