import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuborninadosComponent } from './suborninados-component';

describe('SuborninadosComponent', () => {
  let component: SuborninadosComponent;
  let fixture: ComponentFixture<SuborninadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuborninadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuborninadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
