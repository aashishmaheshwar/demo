import { TestBed, inject } from "@angular/core/testing";

import { ServerService } from "./server.service";
import { HttpClientModule } from "@node_modules/@angular/common/http";

describe("ServerService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ServerService]
    });
  });

  it("should be created", inject([ServerService], (service: ServerService) => {
    expect(service).toBeTruthy();
  }));

  it("testing fake API call on static JSON data with params", inject(
    [ServerService],
    (service: ServerService) => {
      let params = {};
      params["ram"] = ["4", "8", "64"];
      params["hdd"] = ["SATA2"];
      params["location"] = ["AmsterdamAMS-01", "Washington D.C.WDC-01"];
      params["storageMin"] = 0;
      params["storageMax"] = 72000;
      let serviceData = [];
      service.getServers_StaticData(params).subscribe(data => {
        serviceData = data;
        return serviceData;
      });
      expect(serviceData["servers"].length).toEqual(66);
    }
  ));
});
