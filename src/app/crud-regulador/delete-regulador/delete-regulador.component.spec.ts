import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReguladorComponent } from './delete-regulador.component';

describe('DeleteReguladorComponent', () => {
  let component: DeleteReguladorComponent;
  let fixture: ComponentFixture<DeleteReguladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReguladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReguladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
