import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDropoutListComponent } from './product-dropout-list-component';

describe('ProductDropoutListComponent', () => {
  let component: ProductDropoutListComponent;
  let fixture: ComponentFixture<ProductDropoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDropoutListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDropoutListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
