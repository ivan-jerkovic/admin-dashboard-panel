import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss', '../card/card.component.scss'],
})
export class CalendarCardComponent implements OnInit {
  public constructor(private sharedService: SharedService) {}

  selected: any;

  ngOnInit(): void {
    this.selected = new Date().toISOString().split('T')[0];
  }

  onClick() {
    let date = this.selected.toISOString().split('T')[0];
    let days = (
      parseInt(date[date.length - 2] + date[date.length - 1]) + 1
    ).toString();

    if (days.length === 1) days = '0' + days;
    date = date.slice(0, date.length - 2) + days;

    this.sharedService.selectedDate.next(date);
  }
}
