import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home8 } from './home-8';

describe('Home8', () => {
  let component: Home8;
  let fixture: ComponentFixture<Home8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
