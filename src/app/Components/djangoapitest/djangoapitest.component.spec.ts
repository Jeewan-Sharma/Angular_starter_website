import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoapitestComponent } from './djangoapitest.component';

describe('DjangoapitestComponent', () => {
  let component: DjangoapitestComponent;
  let fixture: ComponentFixture<DjangoapitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjangoapitestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjangoapitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
