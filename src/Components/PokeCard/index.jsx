import { CardBody, CardFooter, CardT, PokeImage, Title } from "../styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import { addFavorits, getFavorits, removeToFavorits } from "../../Abstract/favorits";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

export default function PokeCard({ name, png }) {
    const navigate = useNavigate();

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

        if (isFavorited) {
            return (
                <Tooltip>
                    <FaStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />
                </Tooltip>
            );
        } else {
            return (
                <Tooltip>
                    <FaRegStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />
                </Tooltip>
            );
        }
    }

    async function handleNavigate(name) {
        navigate(`/search/${name}`);
    }


    return (
        <CardT item alignItems={'center'} >
            <Title onClick={() => handleNavigate(name)}>{name}</Title>
            <CardBody>
                <PokeImage src={png} onClick={() => handleNavigate(name)} />
            </CardBody>
            <CardFooter>
                <RenderTooltips name={name} />
            </CardFooter>
        </CardT>
    )
}