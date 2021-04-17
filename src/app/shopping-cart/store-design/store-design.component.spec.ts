import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDesignComponent } from './store-design.component';

describe('StoreDesignComponent', () => {
  let component: StoreDesignComponent;
  let fixture: ComponentFixture<StoreDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
