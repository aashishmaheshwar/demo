import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-section',
  templateUrl: './results-section.component.html',
  styleUrls: ['./results-section.component.css']
})
export class ResultsSectionComponent implements OnInit {
  @Input() results;
  constructor() { }

  ngOnInit() {
  }

}
