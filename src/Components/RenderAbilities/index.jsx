export default function RenderAbilities({ abilities }) {
    if (!abilities) return null;

    return abilities?.map((item) => (
        <p key={item.ability.name}>{item.ability.name}</p>
    ));
}