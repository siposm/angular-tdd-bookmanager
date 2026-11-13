import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookComponent } from './createbook.component';

describe('CreatebookComponent', () => {
  let component: CreatebookComponent;
  let fixture: ComponentFixture<CreatebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatebookComponent]
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

  it('3. az űrlap elküldésekor létrejön a könyv', async () => {
    const element: HTMLElement = fixture.nativeElement;

    const name = element.querySelector<HTMLInputElement>('input[name="name"]')!;
    const isbn = element.querySelector<HTMLInputElement>('input[name="isbn"]')!;
    const date = element.querySelector<HTMLInputElement>('input[name="releaseDate"]')!;

    name.value = 'Clean Code';
    isbn.value = '9780132350884';
    date.value = '2008-08-01';

    for (const input of [name, isbn, date]) {
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    fixture.detectChanges();

    element.querySelector('form')!.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );

    fixture.detectChanges();
    await fixture.whenStable();

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
