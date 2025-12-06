import axios from "axios";

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
            console.error("Erro ao buscar lista inicial:", error);
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
            console.log(detailedPokes);
            setLoading(false);
            return detailedPokes;
        } catch (error) {
            console.error("Erro ao buscar detalhes dos pokes:", error);
            setLoading(false);
        }
    }

    return { handleGet, handleGetInfosPokes };
}