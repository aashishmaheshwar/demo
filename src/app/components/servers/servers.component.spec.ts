import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ServersComponent } from "./servers.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("SearchBoxComponent", () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
