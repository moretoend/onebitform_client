import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerConfirmationComponent } from './answer-confirmation.component';

describe('AnswerConfirmationComponent', () => {
  let component: AnswerConfirmationComponent;
  let fixture: ComponentFixture<AnswerConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
