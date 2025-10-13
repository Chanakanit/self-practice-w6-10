// Lesson 3 - Events Starter
import {addQuote, deleteQuote, updateQuote, getAllQuotes} from './quote.js'

let quotes = getAllQuotes()

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  // a quote element example
  // <section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  const div = document.createElement('div')
  div.setAttribute('data-id', quote.id)
  const pContent = document.createElement('p')
  pContent.textContent = quote.content
  const pAuthor = document.createElement('p')
  pAuthor.textContent = quote.author
  const btnEdit = document.createElement('button')
  btnEdit.classList.add('edit-btn')
  btnEdit.setAttribute('data-id', quote.id)
  btnEdit.textContent = 'Edit'
  const btnDelete = document.createElement('button')
  btnDelete.classList.add('delete-btn')
  btnDelete.setAttribute('data-id', quote.id)
  btnDelete.textContent = 'Delete'

  div.appendChild(pContent)
  div.appendChild(pAuthor)
  div.appendChild(btnEdit)
  div.appendChild(btnDelete)

  btnDelete.addEventListener('click', () => {
    deleteQuote(quote.id)
    deleteQuoteFromDOM(quote.id)
  })

  btnEdit.addEventListener('click', () => {
    const allQ = getAllQuotes()
    const q = allQ.find((q) => q.id === quote.id)
    if (q) {
      idInput.value = q.id
      contentInput.value = q.content
      authorInput.value = q.author
    }
  })
  return div
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const elQuote = createQuoteElement(quote)
  quoteList.appendChild(elQuote) 
}
function updateQuoteInDOM(quote) {
  const div = quoteList.querySelector(`[data-id='${quote.id}']`)
  if (div) {
    const ps = div.querySelectorAll('p')
    ps[0].textContent = quote.content
    ps[1].textContent = quote.author
  }
}
function deleteQuoteFromDOM(id) {
  const div = document.querySelector(`[data-id='${id}']`)
  if (div) {
    div.remove()
  }
}
function renderQuotes() {
  quoteList.innerHTML = ''
  quotes = getAllQuotes()
  quotes.forEach(q => addQuoteToDOM(q))
}
function showRandomQuote() {
    quotes = getAllQuotes()
  if (quotes.length > 0) {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    randomDisplay.textContent = `"${random.content}" — ${random.author}`
  }
}
// Event listeners for form submission, edit, and delete clicks
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const id = idInput.value

  if (id) {
    const updated = updateQuote(Number(id), content, author)
    updateQuoteInDOM(updated)
  } else {
    const newQuote = addQuote(content, author)
    addQuoteToDOM(newQuote)
  }

  form.reset()
})


randomBtn.addEventListener('click', showRandomQuote)
renderQuotes()