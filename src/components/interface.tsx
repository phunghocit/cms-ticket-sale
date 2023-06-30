export interface servicepack  {
    code: string,
    name: string,
    startdate: string,
    starttime: string,
    deadlinedate: string,
    deadlinetime: string,
    codeevent?: string,
    nameevent?: string,
    price: number,
    pricecombo: number,
    quantity: number,
    status: boolean,
    id?:string,
    ServiceId?:string,
  };
  export interface ticket {
    code: string;
    datesell: string;
    dateused: string;
    deadline: string;
    gate: number;
    id: string;
    nameevent: string;
    statuscheck: boolean;
    type: string;
  }