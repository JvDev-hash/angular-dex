import { AbilityResponse } from "./abilities-classes/ability-response.class";
import { TypeResponse } from "./types-classes/type-response.class";

export class Pokemon {
    id!: number;
    abilities!: Array<AbilityResponse>;
    types!: Array<TypeResponse>;
    base_experience!: number;
    height!: number;
    weight!: number;
    name!: string;
}