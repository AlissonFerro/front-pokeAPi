import { Activity, useCallback, useEffect, useState } from "react";
import usePokes from "../CustomHooks/usePokes"
import { useParams } from "react-router-dom";
import PokeInfos from "../Components/PokeInfos";
import Container from "@mui/material/Container";
import { Col, Row } from "../Components/styles";

export default function PokePage() {
  const [poke, setPoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { getPokeInfos } = usePokes({ pokenames: [], setLoading: setIsLoading, setListPokes: () => { } });
  const { name } = useParams();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const { data } = await getPokeInfos(name);
    setPoke(data);
    setIsLoading(false);
  }, [name])

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData(isMounted);
    }
    return () => {
      isMounted = false;
    };
  }, [name]);

  return (
    <Container>
      <Row className="justify-content-center"> 
        <Col xs={10} md={8}>
          <Activity mode={isLoading ? 'hidden' : 'visible'}>
            <PokeInfos poke={poke} />
          </Activity>
        </Col>
      </Row>
    </Container>
  );
}