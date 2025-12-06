import { useCallback, useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { PageCenter,  ContainerGap } from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RenderList from "../Components/RenderList";
import RenderLoading from "../Components/RenderLoading";
import { useGetInfos } from "../CustomHooks/useGet";

export default function Index() {
    const [pokes, setPokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLink, setCurrentLink] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [previousLink, setPreviousLink] = useState('');
    const [nextLink, setNextLink] = useState('');
    const { handleGet, handleGetInfosPokes } = useGetInfos(currentLink, setLoading);

    const getInfos = useCallback(async () => {
        const res = await handleGet();
        setNextLink(res.next);
        setPreviousLink(res.previous);
        setPokes(await handleGetInfosPokes(res.results));
    }, [currentLink]);

    useEffect(() => {
        getInfos();
    }, [getInfos]);

    return (
        <PageCenter>
            <ContainerGap fluid >
                <Row className="justify-content-md-center">
                    <h3>Lista de Pokémons</h3>
                    <RenderLoading loading={loading}>
                        <Row className="g-4">
                            <RenderList list={pokes} />
                        </Row>
                    </RenderLoading>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => setCurrentLink(previousLink)} disabled={loading || !previousLink}>
                            <IoIosArrowBack />
                        </Button>
                    </Col>
                    <Col>
                        <Button disabled={loading || !nextLink} onClick={() => setCurrentLink(nextLink)}><IoIosArrowForward /></Button>
                    </Col>
                </Row>
            </ContainerGap>
        </PageCenter>
    );
}