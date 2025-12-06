import { Col } from "react-bootstrap";
import PokeCard from "../PokeCard";

export default function RenderList({ list }) {
    return list.map((p) => (
        <Col key={p.id} xs={12} sm={6} lg={3}>
            <PokeCard png={p.sprites.front_default} name={p.name} />
        </Col>
    ))
}