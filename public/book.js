export class Book {
    constructor(id, title, author, rating, display, price) {
        this.id = id;
        this.title = title;
        //this.description=description;
        this.author = author;
        this.rating = rating;
        this.display = display;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getRating() {
        return this.rating;
    }
    getDisplay() {
        return this.display;
    }
    getPrice() {
        return this.price;
    }
}
