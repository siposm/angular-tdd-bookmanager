import { Injectable } from '@angular/core';
import { Book } from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
	private books: Book[] = []
	// # -> futási időben is (buildel-t js-ben)
	// private -> csak fordítási időben (ts-en belül)

	constructor() { }

	getBooks(): Book[] {
		return this.books
	}

	addBook(book: Book): void {
		this.books.push(book)
	}
}
