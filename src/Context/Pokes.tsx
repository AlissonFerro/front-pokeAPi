import React, { useState } from "react";
import { toast } from "react-toastify";
interface PokeNamesType {
    name: string
}
interface PokesContextType {
    pokes: PokeNamesType[];
    addOrRemovePoke: (name: string) => void;
    clearPokes: () => void
}

export const PokesContext = React.createContext<PokesContextType>({} as PokesContextType);
PokesContext.displayName = 'Pokes';

export function PokesProvider({ children }) {
    const [pokes, setPokes] = useState([]);

    function addOrRemovePoke(name: string) {
        try {

            if (pokes.findIndex((poke) => poke === name) < 0) {
                if (pokes.length > 2) throw new Error('Não pode adicionar mais que 3 pokemons no comparativo')
                setPokes([...pokes, name])
            } else {
                const p = pokes.filter((poke) => poke !== name);
                setPokes(p);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    function clearPokes() {
        setPokes([]);
    }

    return (
        <PokesContext.Provider
            value={{ pokes, addOrRemovePoke, clearPokes }}
        >
            {children}
        </PokesContext.Provider>
    )
}