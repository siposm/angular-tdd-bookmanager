import { Component, inject } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrl: './createbook.component.scss'
})
export class CreatebookComponent {
	public book: Book = { name: "", isbn: "", releaseDate: "" }
	private service: BookService = inject(BookService)
	create(): void {
		this.service.addBook(this.book)
	}
}
