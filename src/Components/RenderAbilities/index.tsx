import type { Ability } from "../../Interfaces/Poke.js";

interface AbilitiesProps {
    abilities: Ability[]
}

export default function RenderAbilities({ abilities }: AbilitiesProps) {
    if (!abilities) return null;

    return abilities?.map((item) => (
        <p key={item.ability.name}>{item.ability.name}</p>
    ));
}