import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrl: './listbooks.component.scss'
})
export class ListbooksComponent {
	public service: BookService = inject(BookService)


}
