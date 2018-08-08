import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResultsSectionComponent } from "./results-section.component";
import { DataTableComponent } from "../data-table/data-table.component";

describe("ResultsSectionComponent", () => {
  let component: ResultsSectionComponent;
  let fixture: ComponentFixture<ResultsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsSectionComponent, DataTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSectionComponent);
    component = fixture.componentInstance;
    component.results = {
      servers: [
        {
          model: "Dell R210Intel Xeon X3440",
          ram: {
            memory: "16",
            unit: "GB",
            type: "DDR3"
          },
          hdd: {
            memory: "2",
            count: "2",
            unit: "TB",
            type: "SATA2"
          },
          location: "AmsterdamAMS-01",
          price: {
            currency: "EUR",
            currencySymbol: "€",
            amountCents: 4999
          }
        }
      ]
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
