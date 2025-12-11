import { Activity, useCallback, useEffect, useState } from "react";
import usePokes from "../CustomHooks/usePokes"
import { useParams } from "react-router-dom";
import PokeInfos from "../Components/PokeInfos";

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
    <Activity mode={isLoading ? 'hidden' : 'visible'}>
      {!isLoading ? <PokeInfos poke={poke} /> : <>Carregando</>}
    </Activity>
  );
}