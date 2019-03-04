import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMatTableComponent } from './product-mat-table.component';

describe('ProductMatTableComponent', () => {
  let component: ProductMatTableComponent;
  let fixture: ComponentFixture<ProductMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
