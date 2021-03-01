const quate = document.querySelector("#quoteSection")
const author = document.querySelector("#author")
const btn = document.querySelector("#generate")

btn.addEventListener("click", () => {
    fetch("https://quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quate.innerHTML = '" ' + data.content + ' "';
            author.innerHTML = data.author;
        })
})