import { CardBody, CardT, CardTitlePokeInfo, Col, PokeCard, Row } from "../styles.js";
import SimpleRadarChart from "../SimpleRadarChart/index.jsx";
import RenderImages from "../RenderImages/index.jsx";
import RenderAbilities from "../RenderAbilities/index.jsx";

export default function PokeInfos({ poke }) {    
    return (
        <PokeCard>
            <CardT>
                <CardTitlePokeInfo>{poke?.name} <span>xp: {poke?.base_experience}</span></CardTitlePokeInfo>
                <CardBody>
                    <Row>
                        <Col>
                            <RenderAbilities abilities={poke?.abilities} />
                        </Col>
                        <Col>
                            <RenderImages images={poke?.sprites} />
                        </Col>
                        <Col>
                            <span>Peso:{poke?.weight}</span>
                        </Col>
                    </Row>
                    <Row>
                        <SimpleRadarChart poke={poke} />
                    </Row>
                </CardBody>
            </CardT>
        </PokeCard>
    )
}
