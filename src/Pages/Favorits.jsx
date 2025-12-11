import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { PageCenter,  ContainerGap } from "./styles";
import RenderList from "../Components/RenderList";
import { getFavorits } from "../Abstract/favorits";
import RenderLoading from "../Components/RenderLoading";
import usePokes from "../CustomHooks/usePokes";

export default function FavoritsPage() {
    const [pokenames, setPokesnames] = useState([]);
    const [listPokes, setListPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getPokesByNames } = usePokes({pokenames, setLoading, setListPokes});
    
    useEffect(() => {
        const favorits = getFavorits();
        setPokesnames(favorits);
    }, []);

    useEffect(()=> {
        getPokesByNames();
    }, [pokenames])

    return (
        <PageCenter>
            <ContainerGap fluid >
                <Row className="justify-content-md-center">
                    <h3>Seus favoritos</h3>
                    <RenderLoading loading={loading}>
                        <RenderList list={listPokes} />
                    </RenderLoading>
                </Row>
            </ContainerGap>
        </PageCenter>
    );
}