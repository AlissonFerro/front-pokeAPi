import { useEffect, useState } from "react";
import { ContainerGap } from "./styles";
import RenderList from "../Components/RenderList";
import { getFavorits } from "../Abstract/favorits";
import RenderLoading from "../Components/RenderLoading";
import usePokes from "../CustomHooks/usePokes";
import { RowCenter } from "../Components/styles";

export default function FavoritsPage() {
    const [pokenames, setPokesnames] = useState([]);
    const [listPokes, setListPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getPokesByNames } = usePokes({ pokenames, setLoading, setListPokes });

    useEffect(() => {
        const favorits = getFavorits();
        setPokesnames(favorits);
    }, []);

    useEffect(() => {
        getPokesByNames();
    }, [pokenames])

    return (
        <ContainerGap>
            <RowCenter>
                <h3>Seus favoritos</h3>
            </RowCenter>
            <RowCenter>
                <RenderLoading loading={loading}>
                    <RenderList list={listPokes} />
                </RenderLoading>
            </RowCenter>
        </ContainerGap>
    );
}