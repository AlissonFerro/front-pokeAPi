import { Card, Carousel, Col, Row } from "react-bootstrap";
import { CardTitlePokeInfo } from "../styles";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export default function PokeInfos({ poke }) {

    const SimpleRadarChart = ({ stats }) => {
        const s = [];
        for (let i = 0; i < stats.length; i++) {
            console.log(stats[i])
            const test = {
                A: stats[i].base_stat, 
                subject: stats[i].stat.name,
            } 
            s.push(test);
        }
        
        return (
            <RadarChart
                style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                responsive
                outerRadius="80%"
                data={s}
                margin={{
                    top: 20,
                    left: 20,
                    right: 20,
                    bottom: 20,
                }}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name={poke.name} dataKey="A" stroke="#a600ff" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        );
    };

    function RenderAbilities() {
        if (!poke) return <></>

        return poke.abilities?.map((ability) => <p key={ability}>{ability.ability.name}</p>)
    }

    function RenderImages({ images }) {
        const [src, setSrc] = useState(images.front_default);

        const pathImages = ['front_default', 'back_default', 'back_shiny', 'front_shiny'];
        const [position, setPosition] = useState(1);

        useEffect(() => {
            const interval = setInterval(() => {

                setPosition(pos => pos + 1);
                if (position > pathImages.length - 2)
                    setPosition(0);

                setSrc(images[pathImages[position]]);
            }, 2500);


            return () => {
                clearInterval(interval)
            }
        }, [position])

        return <img src={src} alt="Pokemon" />
    }

    return (
        <Card>
            <CardTitlePokeInfo>{poke.name} <span>xp: {poke.base_experience}</span></CardTitlePokeInfo>
            <Card.Body>
                <Row sm={3} >
                    <Col>
                        <RenderAbilities />
                    </Col>
                    <Col>
                        <RenderImages images={poke.sprites} />
                    </Col>
                    <Col>
                        Teste
                    </Col>
                </Row>
                <Row>
                    <SimpleRadarChart stats={poke.stats} />
                </Row>
            </Card.Body>
        </Card>
    )
}