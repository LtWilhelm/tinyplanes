export class AircraftUpgrade {
  constructor(a?: AircraftUpgrade) {
    this.name = a.name || '';
    this.description = a.description || '';
  }
  name: string;
  description: string;
}