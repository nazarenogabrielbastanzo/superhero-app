import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragesComponent } from './averages.component';

describe('AveragesComponent', () => {
  let component: AveragesComponent;
  let fixture: ComponentFixture<AveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
