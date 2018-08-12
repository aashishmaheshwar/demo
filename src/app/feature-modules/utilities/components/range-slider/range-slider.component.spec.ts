import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RangeSliderComponent } from "./range-slider.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("RangeSliderComponent", () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    component.options = [0, 250, 500, 1000, 2000, 3000, 4000, 8000];
    component.clear = false;
    component.title = "range filter";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("clear filter in component", () => {
    component.clear = true;
    component.ngOnChanges();
    expect(component.actualValues.length).toEqual(2);
  });
});
