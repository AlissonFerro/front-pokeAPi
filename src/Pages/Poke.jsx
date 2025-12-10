import { Activity, useEffect, useState } from "react";
import usePokes from "../CustomHooks/usePokes"
import { useParams } from "react-router-dom";
import PokeInfos from "../Components/PokeInfos";

export default function PokePage() {
  const [poke, setPoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const { getPokeInfos } = usePokes([], setIsLoading);
  const { name } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);

      const res = await getPokeInfos(name);

      if (isMounted) {
        setPoke(res.data);
        setIsLoading(false);
        setFirstTime(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [name]);

  return (
    <Activity mode={ firstTime? 'hidden' : 'visible' }>
      {!isLoading ? <PokeInfos poke={poke} /> : <>Carregando</>}
    </Activity>
  );
}