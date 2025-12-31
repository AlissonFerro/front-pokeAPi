import { useCallback, useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RenderList from "../Components/RenderList";
import RenderLoading from "../Components/RenderLoading";
import { useGetInfos } from "../CustomHooks/useGet.ts";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ButtonStyles, ContainerCenter, Void } from "./styles";
import { useNavigate } from "react-router-dom";
import { PokesContext } from "../Context/Pokes";
import { Input, TextField } from "@mui/material";
import { toast } from "react-toastify";

export default function Index() {
    const [pokes, setPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLink, setCurrentLink] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [previousLink, setPreviousLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const { clearPokes, pokesnames } = useContext(PokesContext);
    const { handleGet, handleGetInfosPokes, getPokeByName } = useGetInfos(currentLink, setLoading);

    const getInfos = useCallback(async () => {
        setLoading(true)
        try {
            const res = await handleGet();
            setNextLink(res.next);
            setPreviousLink(res.previous);
            const res2 = await handleGetInfosPokes(res.results);
            setPokes(res2)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }, [currentLink]);

    async function getSearch(){
        setLoading(true)
        if(search.length < 1){
            setLoading(false)
            getInfos();
            return 
        } 
        try {
            const res = await getPokeByName(search);
            if(res.data.pokes) setPokes(res.data);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false)
        }
    }

    function handleCompere(){
        if(pokesnames.length < 1)
            return toast.error('Nenhum pokemon selecionado')
        navigate('/compare')
    }

    useEffect(() => {
        getInfos();
    }, [getInfos]);

    return (
        <ContainerCenter>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item sx={{ xs: 12, md: 6, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3">Lista de Pokémons</Typography>
                    <Grid sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid>
                            <Void />
                        </Grid>
                        <Grid sx={{ display: 'flex', alignContent: 'center' }}>
                            <TextField 
                                label="Procure um pokemon"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                onBlur={getSearch}
                            />
                        </Grid>
                        <Grid>
                            <ButtonStyles onClick={handleCompere}>
                                Comparar
                            </ButtonStyles>

                        </Grid>
                        <Grid sx={{ flexDirection: 'column' }}>
                            <ButtonStyles onClick={clearPokes}>
                                Limpar seleção
                            </ButtonStyles>
                        </Grid>
                        <Grid><Void /></Grid>
                    </Grid>
                    <RenderLoading loading={loading}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                            <RenderList list={pokes} />
                        </Grid>
                    </RenderLoading>
                </Grid>
                <Grid item sx={{ xs: 12, justifyContent: 'space-around', flex: 1, padding: '1rem 3rem' }}>
                    <Grid container sx={{ justifyContent: 'space-between' }} >
                        <Grid item>
                            <ButtonStyles onClick={() => setCurrentLink(previousLink)} disabled={loading || !previousLink}>
                                <IoIosArrowBack />
                            </ButtonStyles>
                        </Grid>
                        <Grid item>
                            <ButtonStyles disabled={loading || !nextLink} onClick={() => setCurrentLink(nextLink)}>
                                <IoIosArrowForward />
                            </ButtonStyles>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </ContainerCenter>
    );
}