import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalcollectionComponent } from './festivalcollection.component';

describe('FestivalcollectionComponent', () => {
  let component: FestivalcollectionComponent;
  let fixture: ComponentFixture<FestivalcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
