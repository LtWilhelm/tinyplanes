export enum fireArc {
  front, rear, right, left, up, down
}

export class Weapon {
  name: string;
  arc: fireArc[];
  firepower: {
    short: number;
    medium: number;
    long: number;
  }
  damage: number;
  ammo: number | 'UL';
  special: string[];

  constructor(w?: Weapon) {
    this.name = w?.name || '';
    this.arc = w?.arc || [];
    this.firepower = w?.firepower || {
      short: 0,
      medium: 0,
      long: 0
    }
    this.damage = 4;
    this.ammo = w?.ammo || 'UL';
    this.special = w?.special || [];
  }
}