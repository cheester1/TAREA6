import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home6 } from './home-6';

describe('Home6', () => {
  let component: Home6;
  let fixture: ComponentFixture<Home6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
