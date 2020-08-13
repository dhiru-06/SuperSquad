import character_json from '../data/character.json';
import { queryHelpers } from '@testing-library/react';

 export function createCharacter(id){
    let character = character_json.find(c => c.id === id);
    return character;
}
