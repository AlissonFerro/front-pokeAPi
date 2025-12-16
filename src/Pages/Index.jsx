import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RenderList from "../Components/RenderList";
import RenderLoading from "../Components/RenderLoading";
import { useGetInfos } from "../CustomHooks/useGet";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Index() {
    const [pokes, setPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLink, setCurrentLink] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [previousLink, setPreviousLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const { handleGet, handleGetInfosPokes } = useGetInfos(currentLink, setLoading);

    const getInfos = useCallback(async () => {
        const res = await handleGet();
        setNextLink(res.next);
        setPreviousLink(res.previous);
        const res2 = await handleGetInfosPokes(res.results);
        setPokes(res2)
    }, [currentLink]);

    useEffect(() => {
        getInfos();
    }, [getInfos]);

    return (
        <Container>
            <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3">Lista de Pokémons</Typography>
                    <RenderLoading loading={loading}>
                        {/* xs={12} aqui garante que a lista de RenderList ocupe o espaço total */}
                        <Grid container spacing={2}>
                            <RenderList list={pokes} />
                        </Grid>
                    </RenderLoading>
                </Grid>

                {/* Bloco Botões */}
                <Grid item xs={12}>
                    {/* Um Grid container interno para alinhar os botões com espaço entre eles */}
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Button onClick={() => setCurrentLink(previousLink)} disabled={loading || !previousLink}>
                                <IoIosArrowBack />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button disabled={loading || !nextLink} onClick={() => setCurrentLink(nextLink)}><IoIosArrowForward /></Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
}