const url = "https://gutendex.com/books/";
const ul = document.querySelector(".best-book-list");

function clock() {
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
  
    const date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
  }
  
  setInterval(clock, 1000);
  
  async function getBestselerBooks(){
    const res = await fetch(url);
    const{ results: data }= await res.json();
    console.log(data)
    ul.innerHTML = "";
    const bookshelfItems = data.filter((book) =>
          book.bookshelves.some((genre) => genre.includes("Best Books Ever Listing")));
  console.log(bookshelfItems);

    bookshelfItems.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = 
        `  <img src="${book.formats["image/jpeg"]}" alt="book-cover" class="book-img">
      
        <div class="book-info">
            <h3>${book.title}</h3>
            <p>${book.authors.map((author) => author.name).join(', ')}</p>
            <a href="${book.formats["text/html"]}" class="book-link">Start to read <img src="/img/angle-small-right.png" alt="angle-small-right-icon"></a>
        </div>`
       ul.append(li) 
    })

}
getBestselerBooks();



  
