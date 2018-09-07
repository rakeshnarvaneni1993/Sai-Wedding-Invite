import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWeddingComponent } from './the-wedding.component';

describe('TheWeddingComponent', () => {
  let component: TheWeddingComponent;
  let fixture: ComponentFixture<TheWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
