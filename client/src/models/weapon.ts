export enum fireArc {
  front, rear, right, left, up, down
}

export const getArc = (a: fireArc) => {
  switch (a) {
    case fireArc.front:
      return 'Front';
      break;
    case fireArc.rear:
      return 'Rear';
      break;
    case fireArc.left:
      return 'Left';
      break;
    case fireArc.right:
      return 'Right';
      break;
    case fireArc.up:
      return 'Up';
      break;
    case fireArc.down:
      return 'Down';
      break;
  }
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
  special?: string[];

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