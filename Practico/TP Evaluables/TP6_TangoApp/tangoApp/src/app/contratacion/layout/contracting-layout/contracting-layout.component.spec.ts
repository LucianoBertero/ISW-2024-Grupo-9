import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractingLayoutComponent } from './contracting-layout.component';

describe('ContractingLayoutComponent', () => {
  let component: ContractingLayoutComponent;
  let fixture: ComponentFixture<ContractingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractingLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
