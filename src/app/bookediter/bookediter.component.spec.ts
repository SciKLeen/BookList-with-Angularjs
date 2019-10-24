import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookediterComponent } from './bookediter.component';

describe('BookediterComponent', () => {
  let component: BookediterComponent;
  let fixture: ComponentFixture<BookediterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookediterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookediterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
