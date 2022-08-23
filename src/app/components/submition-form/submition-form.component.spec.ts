import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitionFormComponent } from './submition-form.component';

describe('SubmitionFormComponent', () => {
  let component: SubmitionFormComponent;
  let fixture: ComponentFixture<SubmitionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
