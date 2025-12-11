import { Card, Col, Row } from "react-bootstrap";
import { CardTitlePokeInfo } from "../styles";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function PokeInfos({ poke }) {

    const SimpleRadarChart = ({ stats }) => {
        if (!stats) return null; 

        const data = stats.map(stat => ({
            A: stat.base_stat, 
            subject: stat.stat.name,
        }));
        
        return (
            <Row className="justify-content-center">
            <ResponsiveContainer width="80%" aspect={1}>
                <RadarChart
                    outerRadius="80%"
                    data={data}
                    margin={{
                        top: 50,
                        left: 50,
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name={poke.name} dataKey="A" stroke="#a600ff" fill="#8884d8" fillOpacity={0.45} />
                </RadarChart>
            </ResponsiveContainer>
            </Row>

        );
    };

    function RenderAbilities() {
        if (!poke) return null;

        return poke.abilities?.map((item) => (
            <p key={item.ability.name}>{item.ability.name}</p>
        ));
    }

    function RenderImages({ images }) {
        const [index, setIndex] = useState(0); 
        const pathImages = ['front_default', 'back_default', 'back_shiny', 'front_shiny'];

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(prevIndex => (prevIndex + 1) % pathImages.length);
            }, 2500);

            return () => {
                clearInterval(interval);
            }
        }, [pathImages.length]);

        const currentSrc = images?.[pathImages[index]];

        if (!currentSrc) return <p>Imagem não disponível</p>

        return <img src={currentSrc} alt="Pokemon" style={{ width: '100px', height: '100px' }} />;
    }

    return (
        <Card>
            <CardTitlePokeInfo>{poke.name} <span>xp: {poke.base_experience}</span></CardTitlePokeInfo>
            <Card.Body>
                <Row>
                    <Col>
                        <RenderAbilities />
                    </Col>
                    <Col>
                        <RenderImages images={poke.sprites} />
                    </Col>
                    <Col>
                        <span>Peso:{poke.weight}</span>
                    </Col>
                </Row>
                <Row>
                    <SimpleRadarChart stats={poke.stats} />
                </Row>
            </Card.Body>
        </Card>
    )
}
