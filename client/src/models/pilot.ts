export type aceAbility = {
  name: string;
  description: string;
  faction: string;
};

export class Pilot {
  aceAbilities: aceAbility[];
  pilotAbility?: string;
  pilotName?: string;
  canTakeAceAbilities = true;
  faction?: string;

  constructor(p?: Pilot) {
    this.aceAbilities = p?.aceAbilities || [];
    this.pilotAbility = p?.pilotAbility;
    this.pilotName = p?.pilotName;
  }
}