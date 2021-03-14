import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  years: number[] = [];

  constructor() {
    this.initYearFilter();
  }

  ngOnInit(): void {}

  // Create Years Filters
  initYearFilter(): void {
    let startYear = 2006;
    const currentYear = new Date().getFullYear();
    while (startYear <= currentYear) {
      this.years.push(startYear++);
    }
  }
}
