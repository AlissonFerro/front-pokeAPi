import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { RadarStyles } from "../styles";

export default function SimpleRadarChart({ poke }){
    if (!poke?.stats) return null;

    const data = poke.stats.map(stat => ({
        A: stat?.base_stat,
        subject: stat?.stat.name,
    }));

    return (
        <RadarStyles>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart
                    outerRadius="80%"
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name={poke.name} dataKey="A" stroke="#a600ff" fill="#8884d8" fillOpacity={0.45} />
                </RadarChart>
            </ResponsiveContainer>
        </RadarStyles>

    );
};
