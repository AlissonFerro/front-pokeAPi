import { Activity, useCallback, useEffect, useState } from "react";
import usePokes from "../CustomHooks/usePokes.ts"
import { useParams } from "react-router-dom";
import PokeInfos from "../Components/PokeInfos";
import { ContainerCenter } from './styles';
import { Container } from "@mui/material";

export default function PokePage() {
  const [poke, setPoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { getPokeInfos } = usePokes(setIsLoading, setPoke);
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
      <Activity mode={isLoading ? 'hidden' : 'visible'}>
        <PokeInfos poke={poke} />
      </Activity>
    </Container>
  );
}