import axios from "axios";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import type { PokemonData } from "../Interfaces/Poke.js";

export default function usePokes(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
    setListPokes: React.Dispatch<React.SetStateAction<string[]>>
) {

    const getPokesByNames = useCallback(async (pokenames: string[]): Promise<void> => {
        const pokesAwait = [];
        setLoading(true);
        for (let i = 0; i < pokenames.length; i++) {
            const res = getPokeInfos(pokenames[i]);
            pokesAwait.push(res);
        }   
        try {
            const res = await Promise.all(pokesAwait);
            setListPokes(res.map(r=> r.data))
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [])

    async function getPokeInfos(name: string): Promise<PokemonData> {
        setLoading(true);
        try {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false)
        }
    }

    return { getPokesByNames, getPokeInfos };
}