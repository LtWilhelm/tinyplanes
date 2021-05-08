import type { Weapon } from './weapon';
import type { Aircraft } from './aircraft';

export class Upgrade {
  name: string;
  points: number;
  description: string;
  weapon?: Weapon;

  constructor(u?: Upgrade) {
    this.name = u?.name || '';
    this.points = u?.points || 0;
    this.description = u?.description || '';
    this.weapon = u?.weapon;
  }
}

export class Faction {
  name: string;
  upgrades: Upgrade[];
  weapons: Weapon[];
  aircraft: Aircraft[];

  constructor(f?: Faction) {
    this.name = f?.name || '';
    this.upgrades = f?.upgrades || [];
    this.weapons = f?.weapons || [];
    this.aircraft = f?.aircraft || [];
  }
}