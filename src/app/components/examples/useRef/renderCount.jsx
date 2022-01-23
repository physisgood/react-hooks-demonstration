import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const someRef = useRef("someRef");
    const [renderCount, setRenderCount] = useState(0);
    useEffect(() => {
        setRenderCount(prevState => prevState + 1);
    }, []);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider/>
            {someRef.current}
            <p>render count: {renderCount}</p>
        </CardWrapper>
    );
};

export default RenderCountExample;
