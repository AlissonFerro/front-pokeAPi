import { CardBody, CardFooter, CardHeader, CardT, PokeImage, Title, Void } from "../styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import { addFavorits, getFavorits, removeToFavorits } from "../../Abstract/favorits";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { PokesContext } from "../../Context/Pokes";

export default function PokeCard({ name, png }) {
    const navigate = useNavigate();
    const { pokesnames, addOrRemovePoke } = useContext(PokesContext);
    const [checked, setChecked] = useState({});

    useEffect(() => {
        getChecked()
    }, [pokesnames]);

    if (!name || !png) return

    function RenderTooltips({ name }) {
        const [isFavorited, setIsFavorited] = useState(false);

        useEffect(() => {
            const currentFavorits = getFavorits();
            setIsFavorited(currentFavorits.includes(name));
        }, [name]);

        const handleToggleFavorite = () => {
            if (isFavorited) {
                removeToFavorits(name);
                setIsFavorited(false);
            } else {
                addFavorits(name);
                setIsFavorited(true);
            }
        };

        if (isFavorited)
            return <FaStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />

        return <FaRegStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />
    }

    async function handleNavigate(name) {
        navigate(`/search/${name}`);
    }

    function handleChecked({ name }) {
        addOrRemovePoke({ name })
    }

    function getChecked() {
        const map = {};
        pokesnames.forEach((name) => {
            map[name] = true; 
        });
        setChecked(map);
    }


    return (
        <CardT item alignItems={'center'} >
            <CardHeader>
                <Checkbox color="secondary" checked={!!checked[name]} value={name} onChange={() => handleChecked({ name })} />
                <Title onClick={() => handleNavigate(name)}>
                    {name}
                </Title>
                <Void />
            </CardHeader>
            <CardBody>
                <PokeImage src={png} onClick={() => handleNavigate(name)} />
            </CardBody>
            <CardFooter>
                <RenderTooltips name={name} />
            </CardFooter>
        </CardT>
    )
}