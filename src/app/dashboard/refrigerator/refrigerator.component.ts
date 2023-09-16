import { Component } from '@angular/core';
import * as moment from 'moment';
import { RefrigeratorDetailModel, RefrigeratorModel } from 'src/app/shared/models/refrigerator.model';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.scss'],
})
export class RefrigeratorComponent {
  displayedColumns: string[] = ['serial', 'status', 'date', 'time'];
  exampleDatabase: any;

  mockupDate: RefrigeratorModel[] = [
    {
      serial: '097D4NAW800149Z',
      status: 'NA',
      dateTime: new Date(),
      img_path: '../../../../assets/images/2-hientho.png',
    },
    {
      serial: '097D4NAW80014329',
      status: 'NA',
      dateTime: new Date(),
      img_path: '../../../../assets/images/2-hientho.png',
    },
  ];

  selectedRowSerial: string = '';

  dataSource: RefrigeratorDetailModel[] = [];

  isDrawer: boolean = false;
  selectedRowData: any;

  constructor() {
    this.dataSource = this.mockupDate.map((e: RefrigeratorModel) => {
        return {
          ...e,
          date: moment(e.dateTime).format('yyyy-mm-DD'),
          time: moment(e.dateTime).format('HH:mm:ss'),
        } as RefrigeratorDetailModel;
    });
  }

  selectedRow(value: RefrigeratorDetailModel) {
    if (value) {
      this.isDrawer = true;
      this.selectedRowData = value;
      this.selectedRowSerial = value.serial
    }
  }
}
