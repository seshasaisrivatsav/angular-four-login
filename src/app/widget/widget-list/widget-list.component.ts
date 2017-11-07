import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../services/widget.service.client';
import {Widget} from '../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  constructor(private widgetService: WidgetService) { }
  widgets: Widget[];
  ngOnInit() {
    // this.widgets = this.widgetService.findAllWidgets();
    this.widgetService.findAllWidgets()
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
      });
  }
}
