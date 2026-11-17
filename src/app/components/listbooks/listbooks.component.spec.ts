import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbooksComponent } from './listbooks.component';
import { BookService } from '../../services/book.service';

describe('ListbooksComponent', () => {
  let component: ListbooksComponent;
  let fixture: ComponentFixture<ListbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('1. a komponens létrejön', () => {
    expect(component).toBeTruthy();
  });

  it('2. a könyvek listája megjelenik', () => {
    const service = TestBed.inject(BookService);

    service.addBook({
      name: 'Clean Code',
      isbn: '9780132350884',
      releaseDate: '2008-08-01'
    });

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Clean Code');
  });

  it('3. a könyv ISBN-száma megjelenik', () => {
    const service = TestBed.inject(BookService);

    service.addBook({
      name: 'Design Patterns',
      isbn: '9780201633610',
      releaseDate: '1994-10-21'
    });

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('9780201633610');
  });
});
