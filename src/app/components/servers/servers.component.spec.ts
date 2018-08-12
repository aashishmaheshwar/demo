import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ServersComponent } from "./servers.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServerService } from "@services/server.service";
import { HttpClientModule } from "@node_modules/@angular/common/http";
import { SpinnerService } from "@services_utilities/spinner.service";

describe("SearchBoxComponent", () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ServersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ServerService, SpinnerService]
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
