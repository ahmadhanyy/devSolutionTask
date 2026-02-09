import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFinishedPage } from './not-finished-page';

describe('NotFinishedPage', () => {
  let component: NotFinishedPage;
  let fixture: ComponentFixture<NotFinishedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFinishedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFinishedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
