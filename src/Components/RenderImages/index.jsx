import { useEffect, useState } from "react";

export default function RenderImages({ images }) {
    const [index, setIndex] = useState(0);
    const pathImages = ['front_default', 'back_default', 'back_shiny', 'front_shiny'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % pathImages.length);
        }, 2500);

        return () => {
            clearInterval(interval);
        }
    }, [pathImages.length]);

    const currentSrc = images?.[pathImages[index]];

    if (!currentSrc) return <p>Imagem não disponível</p>

    return <img src={currentSrc} alt="Pokemon" style={{ width: '100px', height: '100px' }} />;
}