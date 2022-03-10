import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefViewComponent } from './chef-view.component';

describe('ChefViewComponent', () => {
  let component: ChefViewComponent;
  let fixture: ComponentFixture<ChefViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
