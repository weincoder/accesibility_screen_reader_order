import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAComponent } from './example-a.component';

describe('ExampleAComponent', () => {
  let component: ExampleAComponent;
  let fixture: ComponentFixture<ExampleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
