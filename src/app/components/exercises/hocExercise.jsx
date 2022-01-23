import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import SimpleComponent from "./simpleComponent";
import withPropsStyles from "../examples/hoc/withPropsStyles";

const HocExercise = () => {
    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify({ auth: false }));
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const [auth, setAuth] = useState(`${user.auth}`);
    const NewComponent = withPropsStyles(SimpleComponent);

    const onLogin = () => {
        user.auth = "true";
        setAuth(`${user.auth}`);
        console.log(user.auth);
    };
    const onLogOut = () => {
        user.auth = "false";
        setAuth(`${user.auth}`);
        console.log(user.auth);
    };

    return (
        <CollapseWrapper title="Упражнение">

            <SimpleComponent
                onLogin={onLogin}
                onLogout={onLogOut}
                isAuth={auth}
            />

            <NewComponent
                onLogin={onLogin}
                onLogout={onLogOut}
                isAuth={auth}
            />

        </CollapseWrapper>
    );
};

export default HocExercise;
