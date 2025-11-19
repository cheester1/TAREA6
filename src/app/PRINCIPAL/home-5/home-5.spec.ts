import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5 } from './home-5';

describe('Home5', () => {
  let component: Home5;
  let fixture: ComponentFixture<Home5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
