import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('1. a szolgáltatás létrejön', () => {
    expect(service).toBeTruthy();
  });

  it('2. kezdetben a könyvek listája üres', () => {
    expect(service.getBooks()).toEqual([]);
  });

  it('3. új könyv hozzáadható a listához', () => {
    const book = {
      name: 'Clean Code',
      isbn: '9780132350884',
      releaseDate: '2008-08-01'
    };

    service.addBook(book);

    expect(service.getBooks()).toContain(book);
  });
});
