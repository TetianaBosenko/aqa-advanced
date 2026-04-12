import {Book} from './book.js';
import {eBook} from './eBook.js';

// створюю нові екземпляри класів book та eBook
const book1 = new Book ('Financier', 'Theodore Dreiser', 1925);
const book2 = new Book ('Martin Eden', 'Jack London', 1908);
const book3 = new Book ('All the Broken Places', 'John Boyne', 2022);
const eBook1 = new eBook ('The Kite Runner','Khaled Hosseini', 2003, 'epub');

// створюю масив з обʼєктів
const books = [book1, book2, book3, eBook1];

// перезаписую властивості першого обʼєкта book1
try {
    book1.year = 'test'
} catch (error) {
    console.log(error.message);
} 

try {
    book1.title = 'The Financier'
} catch (error) {
    console.log(error.message);
}

try {
    book1.author = 1965
} catch (error) {
    console.log(error.message);
}

// викликаю printInfo методи для усіх обʼєктів 
book1.printInfo();
book2.printInfo();
book3.printInfo();
eBook1.printInfo();

// викликаю і виводжу в консоль результат статичного методу getEarliest що знаходить найдавнішу книгу
console.log(Book.getEarliest(books));

// створюю нові обʼєкти eBook за допомогою статичного класу createEBook
const eBook2 = eBook.createEBook (book1,'fb2');
const eBook3 = eBook.createEBook (book2,'fb2');

console. log(eBook2);
console. log(eBook3);