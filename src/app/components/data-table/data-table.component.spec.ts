import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DataTableComponent } from "./data-table.component";

describe("DataTableComponent", () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.data = {
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

  it("should create and populate a row", () => {
    expect(component).toBeTruthy();
    expect(component.rows.length).toBe(1);
  });
});
