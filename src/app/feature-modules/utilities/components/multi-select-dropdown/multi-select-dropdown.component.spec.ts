import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MultiSelectDropdownComponent } from "./multi-select-dropdown.component";
import { DebugElement } from "@node_modules/@angular/core";
import { By } from "@angular/platform-browser";

describe("MultiSelectDropdownComponent", () => {
  let component: MultiSelectDropdownComponent;
  let fixture: ComponentFixture<MultiSelectDropdownComponent>;
  let els: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectDropdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectDropdownComponent);
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
    els = fixture.debugElement.queryAll(By.css("input[type='checkbox']"));
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
    option = { key: "12", selected: true };
    component.onChangeSelection(option, true);
    expect(component.selectedCheckBoxes).toEqual(["8", "12"]);
    option = { key: "8", selected: true };
    component.onChangeSelection(option, false);
    expect(component.selectedCheckBoxes.indexOf("8")).toBe(-1);
    expect(component.selection).toEqual("12");
  });
});
