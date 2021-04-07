export class Book {
    constructor(id, title, author, rating, url, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.url = url;
        this.price = price;
    }
}
export let books = [];
export class BookManager {
    getBookById(bookList, id) {
        let searchList = [];
        for (let b of bookList) {
            if (b.id === id) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByTitle(bookList, title) {
        let searchList = [];
        for (let b of bookList) {
            if (b.title.toLowerCase().indexOf(title.toLowerCase()) != -1) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByAuthor(bookList, author) {
        let searchList = [];
        for (let b of bookList) {
            if (b.author.toLowerCase().indexOf(author.toLowerCase()) != -1) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByPrice(bookList, price) {
        let searchList = [];
        for (let b of bookList) {
            if (b.price === price) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    getBookByRating(bookList, rating) {
        let searchList = [];
        for (let b of bookList) {
            if (b.rating === rating) {
                searchList.push(b);
            }
        }
        return searchList;
    }
    addBookToTable(book) {
        const table = document.querySelector('#bookstable');
        const tr = document.createElement('tr');
        tr.classList.add('rows');
        const link = document.createElement('a');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        //const td7=document.createElement('td');
        //link.textContent="Details";
        // link.href=book.url;
        const auth = document.createTextNode(book.author);
        const button = document.createElement("button");
        const i = document.createElement('i');
        i.classList.add("material-icons");
        i.innerText = 'delete';
        button.appendChild(i);
        const rating = document.createTextNode(book.rating.toString());
        const price = document.createTextNode(book.price.toString());
        const Id = document.createTextNode(book.id);
        const title = document.createTextNode(book.title);
        td1.appendChild(Id);
        td2.appendChild(title);
        td3.appendChild(auth);
        td4.appendChild(rating);
        td5.appendChild(price);
        td6.appendChild(button);
        // td7.appendChild(link);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        // tr.appendChild(td7);
        table.appendChild(tr);
        button.addEventListener('click', () => {
            tr.remove();
        });
    }
    deleteRowFn() {
        const table = document.querySelector('#bookstable');
        if (table.rows.length >= 1) {
            for (let i = 1; i <= table.rows.length; i++) {
                table.deleteRow(1);
            }
        }
    }
    displayBooks() {
        console.log(books);
        console.log("I am here");
        // let items;
        // items=localStorage.getItem('books')
        // if(items!==null){
        //     items=JSON.parse(items); //object
        // }
        // books=items;
        // books.forEach((b: Book)=>{
        //     this.addBookToTable(b);
        // });
    }
    // getBooks(){
    //     let books;
    //     if(localStorage.getItem('books')===null){
    //         books=[]
    //     }
    //     else{
    //         books=localStorage.getItem('books');
    //         if(books!==null){
    //             books=JSON.parse(books);
    //         }
    //     }
    //     return books;
    // }
    addBook(book) {
        console.log(book);
        books.push(book);
        localStorage.setItem(book.id, JSON.stringify(books));
    }
}
