import { useEffect, useState } from "react";
import { ContainerGap } from "./styles";
import RenderList from "../Components/RenderList";
import RenderLoading from "../Components/RenderLoading";
import usePokes from "../CustomHooks/usePokes";
import { RowCenter } from "../Components/styles";
import { getFavorits } from "../Abstract/favorits.ts";

export default function FavoritsPage() {
    const [pokenames, setPokesnames] = useState([]);
    const [listPokes, setListPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getPokesByNames } = usePokes({ setLoading, setListPokes });

    useEffect(() => {
        const favorits = getFavorits();
        setPokesnames(favorits);
    }, []);

    useEffect(() => {
        getPokesByNames({ pokenames});
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