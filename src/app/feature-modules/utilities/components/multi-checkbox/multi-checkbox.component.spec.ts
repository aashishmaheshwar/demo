import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MultiCheckboxComponent } from "./multi-checkbox.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@node_modules/@angular/core";

describe("MultiCheckboxComponent", () => {
  let component: MultiCheckboxComponent;
  let fixture: ComponentFixture<MultiCheckboxComponent>;
  let els: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxComponent);
    component = fixture.componentInstance;
    component.options = [
      { key: "2", selected: false },
      { key: "4", selected: false },
      { key: "8", selected: false },
      { key: "12", selected: false }
    ];
    component.title = "checkbox";
    component.clear = false;
    fixture.detectChanges();
    els = fixture.debugElement.queryAll(By.css("input"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("after clear property set to true - selected checkboxes array is empty", () => {
    component.selectedCheckBoxes = [2, 4];
    component.clear = true;
    component.ngOnChanges();
    expect(component.selectedCheckBoxes.length).toEqual(0);
  });

  it("make a checkbox selection and trigger onChangeSelection", () => {
    let val = els.length;
    expect(val).toEqual(4);
    let option = { key: "8", selected: false };
    component.onChangeSelection(option, true);
    expect(component.selectedCheckBoxes.length).toEqual(1);
  });
});
