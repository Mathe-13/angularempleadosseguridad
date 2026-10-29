import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploSignalComponent } from './ejemplo-signal-component';

describe('EjemploSignalComponent', () => {
  let component: EjemploSignalComponent;
  let fixture: ComponentFixture<EjemploSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploSignalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increments the shared counter and updates its double', () => {
    component.incrementarContador();
    fixture.detectChanges();

    expect(component.contador()).toBe(1);
    expect(component.doble()).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Contador : 1');
    expect(fixture.nativeElement.textContent).toContain('2');
  });
});
