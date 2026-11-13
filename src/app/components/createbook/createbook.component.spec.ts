import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookComponent } from './createbook.component';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

describe('CreatebookComponent', () => {
  let component: CreatebookComponent;
  let fixture: ComponentFixture<CreatebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatebookComponent],
			imports: [FormsModule] // !!! teszt-ben is fel kell tüntetni
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('1. a komponens létrejön', () => {
    expect(component).toBeTruthy();
  });

  it('2. a három beviteli mező megjelenik', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('input[name="name"]')).toBeTruthy();
    expect(element.querySelector('input[name="isbn"]')).toBeTruthy();
    expect(element.querySelector('input[name="releaseDate"]')).toBeTruthy();
  });

	it('3. új könyv létrehozása a szolgáltatáson keresztül', () => {
		component.book = {
			name: 'Clean Code',
			isbn: '9780132350884',
			releaseDate: '2008-08-01'
		};

		component.create();

		const service = TestBed.inject(BookService);

		expect(service.getBooks()).toContain(
			jasmine.objectContaining({
				name: 'Clean Code',
				isbn: '9780132350884',
				releaseDate: '2008-08-01'
			})
		);
	});
});
