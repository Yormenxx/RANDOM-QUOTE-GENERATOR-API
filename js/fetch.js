const $btn = document.querySelector(".btn")
const $content_quote = document.querySelector(".content_quote")
const $author_quote = document.querySelector(".author_quote")
const $tema = document.querySelector(".tema")

const urlQuote = "http://api.quotable.io/random"

async function getQuote(){

    $btn.textContent="Loading"

    const response = await fetch(urlQuote)
    const data = await response.json();


    $content_quote.textContent = data.content

    $author_quote.textContent=data.author

    $tema.textContent= data.tags[0]

    console.log(data)


    $btn.textContent="Get quote"
}


$btn.addEventListener("click",getQuote)




