import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReguladorComponent } from './list-regulador.component';

describe('ListReguladorComponent', () => {
  let component: ListReguladorComponent;
  let fixture: ComponentFixture<ListReguladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReguladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReguladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
