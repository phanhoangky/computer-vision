export interface RefrigeratorModel{
  serial: string,
  status: string,
  dateTime: Date,
  img_path: string
}

export interface RefrigeratorDetailModel{
  serial: string,
  status: string,
  img_path: string
  date: string,
  time: string,
}

export enum RefrigeratorStatus {
  NA = 'NA',
  Complete = 'Complete',
  // todo
}
