export interface ISpell {
  index: string;
  name: string;
  url: string;
}

export interface ISpellDetail {
  _id: string;
  higher_level: any[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  material: string;
  ritual: Boolean;
  duration: string;
  concentration: string;
  casting_time: string;
  level: number;
  area_of_effect: ISpell;
  classes: ISpell[];
  subclasses: ISpell[];
  url: string;
}
