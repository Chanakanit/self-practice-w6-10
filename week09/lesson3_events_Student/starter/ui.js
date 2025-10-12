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
  div.setAttribute('data-id', '1')
  const pContent = document.createElement('quoteText')
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {}
function updateQuoteInDOM(quote) {}
function deleteQuoteFromDOM(id) {}
function renderQuotes() {}
function showRandomQuote() {}
// Event listeners for form submission, edit, and delete clicks
