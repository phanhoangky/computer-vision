import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  RefrigeratorDetailModel,
  RefrigeratorModel,
} from 'src/app/shared/models/refrigerator.model';
import { RefrigeratorService } from './services/refrigerator.service';
import { SkeletonLoadingService } from 'src/app/shared/skeleton-loading/skeleton-loading.service';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.scss'],
})
export class RefrigeratorComponent {
  static readonly TAG = 'RefrigeratorComponent: ';
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

  pokemon: any = [];

  selectedRowSerial: string = '';

  dataSource: RefrigeratorDetailModel[] = [];

  isDrawer: boolean = false;
  selectedRowData: any;

  constructor(
    private refService: RefrigeratorService,
    private loadingService: SkeletonLoadingService
  ) {
    console.log(RefrigeratorComponent.TAG, loadingService.id);

    this.dataSource = this.mockupDate.map((e: RefrigeratorModel) => {
      return {
        ...e,
        date: moment(e.dateTime).format('yyyy-mm-DD'),
        time: moment(e.dateTime).format('HH:mm:ss'),
      } as RefrigeratorDetailModel;
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.loadingService.loading$.getValue());

    this.refService.getPokemon();
    this.refService.pokemon$.subscribe((data) => {
      this.pokemon = data.results;
      console.log('Pokenmon', this.pokemon);
    });
  }

  selectedRow(value: RefrigeratorDetailModel) {
    if (value) {
      this.isDrawer = true;
      this.selectedRowData = value;
      this.selectedRowSerial = value.serial;
    }
  }
}
