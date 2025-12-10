import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Image, Title } from "../styles";
import { FaRegStar, FaStar } from "react-icons/fa";
import { addFavorits, getFavorits, removeToFavorits } from "../../Abstract/favorits";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PokeCard({ name, png }) {
    const navigate = useNavigate();

    if (!name || !png) return

    const renderTooltipFav = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Favoritar
        </Tooltip>
    );

    const renderTooltipDesFav = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Desfavoritar
        </Tooltip>
    );

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
                <OverlayTrigger delay={{ show: 250, hide: 200 }} overlay={renderTooltipDesFav}>
                    <FaStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />
                </OverlayTrigger>
            );
        } else {
            return (
                <OverlayTrigger delay={{ show: 250, hide: 200 }} overlay={renderTooltipFav}>
                    <FaRegStar onClick={handleToggleFavorite} style={{ cursor: 'pointer' }} />
                </OverlayTrigger>
            );
        }
    }

    async function handleNavigate(name) {
        navigate(`/${name}`);
    }


    return (
        <Card>
            <Title onClick={() => handleNavigate(name)}>{name}</Title>
            <Card.Body>
                <Image src={png} onClick={() => handleNavigate(name)} />
            </Card.Body>
            <Card.Footer>
                <RenderTooltips name={name} />
            </Card.Footer>
        </Card>
    )
}