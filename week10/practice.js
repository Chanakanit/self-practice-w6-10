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
let visit = localStorage.getItem("visit") || 0
localStorage.setItem("visit", ++visit)
console.log("Test 6: visit count =", visit)
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
const op = {username: 'chanakanit', age: 20}
localStorage.setItem('op', JSON.stringify(op))
console.log('Test 10', JSON.parse(localStorage.getItem('op', op)))
// Test 11: Delete one specific key from localStorage
localStorage.removeItem('colors')
console.log('Test 11: After remove local starge color:', localStorage.getItem('colors'))
// Test 12: Use CookieUtil to set cookie
document.cookie = 'username=chanakanit;age=10'
console.log('Test 12: cookie', document.cookie)
// Test 13: Encode cookie name and value
document.cookie = 'Kmutt' + "=" + encodeURIComponent('@sit')
const Kmutt = document.cookie.split('; ').find(row => row.startsWith('Kmutt=')).split('=').join('')
console.log('Test 13 encode cookie:', JSON.stringify(Kmutt))
// Test 14: Decode cookie
console.log('Test 14: decode cookie', decodeURIComponent(Kmutt))
// Test 15: Create cookie that expires tomorrow
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
document.cookie = `saveoneday=tomorrow;expires=${tomorrow}`
console.log('test 15:', document.cookie)
// Test 16: Read specific cookie manually
const findTomorr = document.cookie.split('; ').find(row => row.startsWith('saveoneday=')).split('=').join(' ')
console.log('Test 16:', findTomorr)
// Test 17: Remove cookie by setting past expiry
document.cookie = 'Kmutt=@sit;expires=Thu, 01 Jan 1970 00:00:00 GMT'
console.log('Test 17:', document.cookie)
// Test 18: Save preferences object to localStorage
const prefs = { theme: "dark", font: "large" }
localStorage.setItem("prefs", JSON.stringify(prefs))
console.log("Test 18:", JSON.parse(localStorage.getItem("prefs")))
// Test 19: Update localStorage value
localStorage.setItem("fontColor", "#ff0000")
console.log("Test 19:", localStorage.getItem("fontColor"))
// Test 20: Check if key exists in localStorage
console.log("Test 20:", localStorage.getItem("fontColor") !== null)
// Test 21: List all keys in localStorage
for (let key in localStorage){
    console.log('Test 21: local storage key:', key)
}
// Test 22: Save login status to sessionStorage
sessionStorage.setItem('logIn', true)
console.log('Test 22: session log in:', sessionStorage.getItem('logIn'))
// Test 23: Increment counter in sessionStorage
let sessCount = sessionStorage.getItem('sessCount') || 0
sessionStorage.setItem('sessCount', ++sessCount)
console.log('Test 23: session count:', sessCount)
// Test 24: Remove all sessionStorage
sessionStorage.clear()
console.log('Test 24: clear session storage:', sessionStorage)
// Test 25: Check data persistence after reload
window.addEventListener('load', () => {
    console.log('Test 25: sessin visit =', localStorage.getItem('visit'))
})
// Test 26: Save multiple settings and show them
console.log('Test 26: show local storage', localStorage)
// Test 27: Simulate remember me using localStorage
localStorage.setItem('remember', true)
if (JSON.parse(localStorage.getItem('remember')) === true){
    console.log('Test 27: remember =', localStorage.getItem('remember'))
}
// Test 28: Limit localStorage keys count (simulate clean-up)
console.log('Test 28: local storage length =', localStorage.length)
if(localStorage.length > 5){
    localStorage.clear()
    console.log('Test 28: after loca storage limit > 5:', localStorage.length)
}
// Test 29: Use try/catch for JSON parse safety
try {
  console.log("Test 29:", JSON.parse(localStorage.getItem("invalid")))
} catch {
  console.log("Test 29: Invalid JSON")
}
// Test 30: Combine cookie + localStorage → user tracking
document.cookie = "trackId=abc123"
localStorage.setItem("lastPage", "home")
const ckTrack = document.cookie.split('; ').find(row => row.startsWith('trackId=')).split('=')
console.log(`Test 30: trackId = ${ckTrack[1]}, lastPage = ${localStorage.getItem('lastPage')}`)
