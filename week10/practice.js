const saveBtn = document.getElementById('saveBtn')
// Test 1: Save bgColor to localStorage when Save clicked
const bgColor = document.getElementById('bgColor')
const saveBgColor = () => {
    localStorage.setItem('bgColor', bgColor.value)
    console.log('Test 1: ', localStorage.getItem('bgColor'))
}
saveBtn.addEventListener('click', saveBgColor)
// Test 2: Load bgColor from localStorage when page loads
window.addEventListener('load', () => {
    document.body.style.backgroundColor = localStorage.getItem('bgColor')
    console.log('Test 2: backgroundColor:', document.body.style.backgroundColor)
    if (localStorage.getItem('bgColor')){
        bgColor.value = localStorage.getItem('bgColor')
    }
})
// Test 3: Save fontColor and fontSize to localStorage
const fontColor = document.getElementById('fontColor')
const fontSize = document.getElementById('fontSize')
const saveFont = () => {
    localStorage.setItem('fontColor', fontColor.value)
    localStorage.setItem('fontSize', fontSize.value)
    console.log('Test 3: save font color', localStorage.getItem('fontColor'))
    console.log('Test 3: save font size', localStorage.getItem('fontSize'))
}
saveBtn.addEventListener('click', saveFont)
// Test 4: Apply saved fontColor and fontSize on load
window.addEventListener('load', () => {
    document.body.style.color = localStorage.getItem('fontColor')
    document.body.style.fontSize = localStorage.getItem('fontSize') || '16px'
    console.log(`Test 4: font color = ${document.body.style.color}, font size = ${document.body.style.fontSize}`)
    if (localStorage.getItem('fontColor')){
        fontColor.value = localStorage.getItem('fontColor')
    }
})
// Test 5: Clear all localStorage when Reset clicked
const reset = document.getElementById('resetBtn')
reset.addEventListener('click', () => {
    localStorage.clear()
    console.log('Test 5: Clear local storage')
    window.addEventListener('load', () => {
    bgColor.value = '#fff'
    fontColor.value = '#000'
    })
})
// Test 6: Save page visit count to localStorage
let count = localStorage.getItem('count') || 0
localStorage.setItem('count', count)
saveBtn.addEventListener('click', () => {
    count++
    localStorage.setItem('count', count)
    console.log('Test 6: count', localStorage.getItem('count'))
})
// Test 7: Save temporary session data
sessionStorage.setItem('user', 'test')
console.log('Test 7: User:',sessionStorage.getItem('user'))
// Test 8: Remove session data
sessionStorage.removeItem('user')
console.log('Test 8: after remove, User:', sessionStorage.getItem('user'))
// Test 9: Store array as JSON in localStorage
const arr = ['red', 'green', 'blue']
localStorage.setItem("colors", JSON.stringify(arr))
console.log("Test 9:", JSON.parse(localStorage.getItem("colors")))
// Test 10: Store object as JSON in localStorage

// Test 11: Delete one specific key from localStorage

// Test 12: Use CookieUtil to set cookie

// Test 13: Encode cookie name and value

// Test 14: Decode cookie

// Test 15: Create cookie that expires tomorrow

// Test 16: Read specific cookie manually

// Test 17: Remove cookie by setting past expiry

// Test 18: Save preferences object to localStorage

// Test 19: Update localStorage value

// Test 20: Check if key exists in localStorage

// Test 21: List all keys in localStorage

// Test 22: Save login status to sessionStorage

// Test 23: Increment counter in sessionStorage

// Test 24: Remove all sessionStorage

// Test 25: Check data persistence after reload

// Test 26: Save multiple settings and show them

// Test 27: Simulate remember me using localStorage

// Test 28: Limit localStorage keys count (simulate clean-up)

// Test 29: Use try/catch for JSON parse safety

// Test 30: Combine cookie + localStorage → user tracking
