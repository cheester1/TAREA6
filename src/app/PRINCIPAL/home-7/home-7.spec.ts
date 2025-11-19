import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home7 } from './home-7';

describe('Home7', () => {
  let component: Home7;
  let fixture: ComponentFixture<Home7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
