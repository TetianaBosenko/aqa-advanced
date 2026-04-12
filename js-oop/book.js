export class Book {
      constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title (title) {
        if (typeof title !== 'string') {
            throw new Error(`Title should be a string`);
        }
        this._title = title;
    }

    set author (author) {
        if (typeof author !== 'string') {
            throw new Error(`Author should be a string`);
        }
        this._author = author;
    }    

    set year (year) {
        if (typeof year !== 'number') {
            throw new Error(`Year should be a number`);
        }
        this._year = year;
    }

    static getEarliest (books) {
        return books.reduce ((earliest, current) => {
            if (earliest.year < current.year) {
                return earliest;
            } else {
                return current;
            }
        }, books[0]);
    }

    printInfo () {
        console.log(`${this.title} written by ${this.author} in ${this.year}`);
        return this;
    }
}