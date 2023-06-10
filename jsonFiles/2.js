const url = "https://gutendex.com/books/";
const ul = document.querySelector(".best-book-list");
const input = document.querySelector("input")
const bookLists = [];

async function getBestselerBooks(){
    const res = await fetch(url);
    const{ results: data }= await res.json();
    console.log(data)
    ul.innerHTML = "";


    data.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = 
        `  <img src="${book.formats["image/jpeg"]}" alt="book-cover" class="book-img">
        
        <div class="book-info">
            <h3>${book.title}</h3>
            <p>${book.authors.map((author) => author.name).join(', ')}</p>
            <a href="${book.formats["text/html"]}" class="book-link">Start to read <img src="/img/angle-small-right.png" alt="angle-small-right-icon"></a>
        </div>`
        bookLists.push(li);
       ul.append(li);
    })

}
getBestselerBooks();


function filterbooks(searchTerm) {
    bookLists.forEach((book) => {
     if(book.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())) {
        book.classList.remove("hide");
     }
     else{
        book.classList.add("hide");
     }
    })
}
input.addEventListener('input', () => {
    filterbooks(input.value)
})