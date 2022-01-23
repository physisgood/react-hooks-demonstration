import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [data, setData] = useState({
        width: "60",
        height: "40"
    });

    console.log(blockRef);

    const handleClick = () => {
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        // eslint-disable-next-line no-return-assign
        blockRef.current.children[0].innerHTML = "text";
        // setData(prevState => console.log(prevState));
        setData({
            width: `${blockRef.current.style.width}`,
            height: `${blockRef.current.style.height}`
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div>
                <div className={"d-inline-flex"}>
                    <div
                        ref={blockRef}
                        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded m-2"
                        style={{
                            height: 40,
                            width: 60,
                            color: "white"
                        }}
                    >
                        <small>Блок</small>
                    </div>
                    <div className={"bg-danger d-flex flex-column justify-content-center align-items-center rounded m-2"}>
                        <p className={"p-2"}>
                            Ширина: {data.width}
                        </p>
                        <p>
                            Высота: {data.height}
                        </p>
                    </div>
                </div>
                <button
                    className={"btn btn-secondary d-2 m-2"}
                    onClick={handleClick}
                >
                    Rerender block
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
