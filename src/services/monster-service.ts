import { RestService } from "./rest-service";

export interface Monster {
  id: string;
  name: string;
  skill: Skill[];
  location: string[];
}

interface Skill {
  name: string;
  desc: string;
  mana: number;
}

export const monsterService = new RestService<Monster>("monsters");
