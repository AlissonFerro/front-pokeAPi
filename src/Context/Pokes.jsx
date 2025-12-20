import React, { useState } from "react";
import { toast } from "react-toastify";

export const PokesContext = React.createContext();
PokesContext.displayName = 'Pokes';

export function PokesProvider({ children }){
    const [pokesnames, setPokes] = useState([]);

    function addOrRemovePoke({ name }){
        try {
            
            if(pokesnames.findIndex((poke) =>poke === name) < 0){
                if(pokesnames.length > 2) throw new Error('Não pode adicionar mais que 3 pokemons no comparativo')
                    setPokes([...pokesnames, name])
            } else{
                const p = pokesnames.filter((poke) => poke !== name);
                setPokes(p);
            }
        } catch (error) {
            toast.error(error.message)   
        }
    }

    function clearPokes(){
        setPokes([]);
    }
    
    return(
        <PokesContext.Provider
            value={{ pokesnames, addOrRemovePoke, clearPokes }}
        >
            {children}
        </PokesContext.Provider>
    )
}