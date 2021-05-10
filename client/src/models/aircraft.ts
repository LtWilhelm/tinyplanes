import type {Weapon} from './weapon';

export enum aircraftClass {
  scout,
  fighter,
  bomber
}

export class Aircraft {
  name: string;
  class: aircraftClass;
  structure: number;
  transport?: number;
  fuel?: number;
  throttle: number;
  aceManouvres: number[];
  handling: number;
  minSpeed: number;
  maxSpeed: number;
  maxAltitude: number;
  weapons: Weapon[];
  weaponSlots: {
    max: number;
    weapons: Weapon[];
  }[]
  points: number;
  img?: string;

  constructor(a?: Aircraft) {
    this.name = a?.name || '';
    this.class = a?.class || aircraftClass.fighter;
    this.structure = a?.structure || 4;
    this.transport = a?.transport;
    this.fuel = a?.fuel;
    this.throttle = a?.throttle || 2;
    this.aceManouvres = a?.aceManouvres || [];
    this.handling = a?.handling || 4;
    this.minSpeed = a?.minSpeed || 2;
    this.maxSpeed = a?.maxSpeed || 5;
    this.maxAltitude = a?.maxAltitude || 5;
    this.weapons = a?.weapons || [];
    this.weaponSlots = a?.weaponSlots || [];
    this.points = a?.points || 0;
    this.img = a?.img;
  }
}