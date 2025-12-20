import { Grid, Typography } from "@mui/material";
import { ContainerCenter } from "./styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import usePokes from "../CustomHooks/usePokes";
import RenderLoading from "../Components/RenderLoading";
import RenderList from "../Components/RenderList";
import { PokesContext } from "../Context/Pokes";
import PokeInfos from "../Components/PokeInfos";

export default function ComparePage() {
    const [pokes, setPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { pokesnames } = useContext(PokesContext);
    const { getPokeInfos } = usePokes({ pokenames: pokes, setListPokes: setPokes, setLoading: setLoading });

    async function handleGet() {
        const getPokes = pokesnames.map((pokename) => getPokeInfos(pokename));
        const promises = await Promise.all(getPokes);
        setPokes(promises.map(promise=> promise.data))
    }

    function RenderListPokes({ pokes }){
        return pokes.map((poke, i) => {
            return <PokeInfos poke={poke} key={i}/> 
        })
    }

    useEffect(() => {
        handleGet()
    }, [pokesnames])

    return (
        <ContainerCenter>
            <Typography variant="h3">Compare</Typography>
            <RenderLoading loading={loading}>
                <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap:'1rem' }}>
                    <RenderListPokes pokes={pokes} />
                </Grid>
            </RenderLoading>
        </ContainerCenter>
    )
}