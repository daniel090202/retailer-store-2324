declare global {
  interface ICounter {
    barcode: string;
    location: number;
  }
}

class Counter implements ICounter {
  public barcode: string;
  public location: number;

  constructor(barcode: string, location: number) {
    this.barcode = barcode;
    this.location = location;
  }
}

export { Counter };
