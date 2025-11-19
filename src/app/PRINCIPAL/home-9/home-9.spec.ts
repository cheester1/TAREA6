import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home9 } from './home-9';

describe('Home9', () => {
  let component: Home9;
  let fixture: ComponentFixture<Home9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
