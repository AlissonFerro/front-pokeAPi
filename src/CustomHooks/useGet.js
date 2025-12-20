import axios from "axios";
import { toast } from "react-toastify";

export function useGetInfos(url, setLoading){    
    async function handleGet(){
        try {
            const res = await axios.get(url);
            return {
                results: res.data.results,
                previous: res.data.previous,
                next: res.data.next
            };            
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);            
        }
    }

    async function getPokeByName({ pokename }) {
        setLoading(true);
        try {
            return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        } catch (error) {
            switch (error.status){
                case 404: 
                    return toast.error('Nenhum pokemon encontrado');                
                default: 
                    return toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    async function handleGetInfosPokes(listPokes) {
        if (!listPokes || listPokes.length === 0) return;

        try {
            const detailedPokesPromises = listPokes.map(async (poke) => {
                const res = await axios.get(poke.url);
                return res.data;
            });

            const detailedPokes = await Promise.all(detailedPokesPromises);
            return detailedPokes;
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);            
        }
    }

    return { handleGet, handleGetInfosPokes, getPokeByName };
}