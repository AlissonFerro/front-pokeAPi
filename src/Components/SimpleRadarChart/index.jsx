import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Row } from "../styles";

export default function SimpleRadarChart({ poke }){
    if (!poke.stats) return null;

    const data = poke.stats.map(stat => ({
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
