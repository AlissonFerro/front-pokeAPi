import axios from "axios";
import { useCallback } from "react";

export default function usePokes(pokenames, setLoading, setListPokes) {

    const getPokesByNames = useCallback(async () => {
        const pokeInfo = [];

        for (let i = 0; i < pokenames.length; i++) {
            const res = await getPokeInfos(pokenames[i]);
            pokeInfo.push(res.data);
        }

        setListPokes(pokeInfo)
    }, [pokenames])

    async function getPokeInfos(name) {
        setLoading(true);
        try {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    return { getPokesByNames, getPokeInfos };
}