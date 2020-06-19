import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReguladorComponent } from './update-regulador.component';

describe('UpdateReguladorComponent', () => {
  let component: UpdateReguladorComponent;
  let fixture: ComponentFixture<UpdateReguladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReguladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReguladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
