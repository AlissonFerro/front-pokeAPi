import axios from "axios";
import { toast } from "react-toastify";
import type { ListPokes, ListUrlsPokes, PayloadPoke, PokemonData } from "../Interfaces/Poke.js";

export function useGetInfos(url: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    async function handleGet(): Promise<ListPokes> {
        try {
            const { data }: PayloadPoke = await axios.get(url);
            return {
                results: data.results,
                previous: data.previous,
                next: data.next
            };
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function getPokeByName(pokename: string): Promise<PokemonData> {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            return data

        } catch (error: any) {
            const message = error.response?.status === 404
                ? 'Nenhum pokemon encontrado'
                : error.message;

            toast.error(message);
            throw new Error(message)
        } finally {
            setLoading(false);
        }
    }

    async function handleGetInfosPokes(listPokes: Array<ListUrlsPokes>): Promise<PokemonData[]> {
        if (!listPokes || listPokes.length === 0) return;

        setLoading(true);
        try {
            const detailedPokesPromises = listPokes.map(async (poke) => {
                const res = await axios.get<PokemonData>(poke.url);
                return res.data;
            });

            const detailedPokes = await Promise.all(detailedPokesPromises);
            return detailedPokes;
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { handleGet, handleGetInfosPokes, getPokeByName };
}