import PokeCard from "../PokeCard";
import PokeInfos from "../PokeInfos";
import { Col } from "../styles";

export default function RenderList({ list }) {
    if (list?.length)
        return list.map((p) => (
            <Col key={p.id}>
                <PokeCard png={p.sprites.front_default} name={p.name} />
            </Col>
        ))
    return <Col>
        <PokeInfos png={list?.sprites?.front_default} name={list?.name}/>
    </Col>
}