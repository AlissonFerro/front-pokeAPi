import { useEffect, type JSX } from "react";
import PokeCard from "../PokeCard";
import PokeInfos from "../PokeInfos";
import { Col } from "../styles";

export default function RenderList({ list }): JSX.Element {
    useEffect(() => {
        console.log(list)
    }, [list])
    if (list?.length)
        return list.map((p) => (
            <Col key={p.id}>
                <PokeCard png={p.sprites.front_default} name={p.name} />
            </Col>
        ));    
        
    return <Col>
        <PokeInfos poke={list}/>
    </Col>
}