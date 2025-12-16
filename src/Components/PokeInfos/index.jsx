import { CardBody, CardT, CardTitlePokeInfo, Col, Row } from "../styles";
import SimpleRadarChart from "../SimpleRadarChart";
import RenderImages from "../RenderImages";
import RenderAbilities from "../RenderAbilities";

export default function PokeInfos({ poke }) {
    return (
        <CardT>
            <CardTitlePokeInfo>{poke.name} <span>xp: {poke.base_experience}</span></CardTitlePokeInfo>
            <CardBody>
                <Row>
                    <Col>
                        <RenderAbilities abilities={poke.abilities}/>
                    </Col>
                    <Col>
                        <RenderImages images={poke.sprites} />
                    </Col>
                    <Col>
                        <span>Peso:{poke.weight}</span>
                    </Col>
                </Row>
                <Row>
                    <SimpleRadarChart poke={poke} />
                </Row>
            </CardBody>
        </CardT>
    )
}
