import {Book} from './book.js';


export class eBook extends Book {
    constructor(title, author, year,fileFormat) {
        super(title, author, year)
        this._fileFormat = fileFormat;
    }

    get fileFormat () {
        return this._fileFormat;
    }

    set fileFormat (fileFormat) {
        if (typeof fileFormat !== 'string') {
            throw new Error(`Title shoudl be a string`);
        }
        this._fileFormat = fileFormat;
    }

    static createEBook (book, format) {
        return new eBook (book.title, book.author,book.year, format);
    }

    printInfo () {
        console.log(`${this.title} written by ${this.author} in ${this.year}, format: ${this.fileFormat}`);
        return this;
    }
}