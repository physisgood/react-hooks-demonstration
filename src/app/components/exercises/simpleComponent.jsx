import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return isAuth === "true"
        ? (
        <div className={"d-flex flex-column flex-fill justify-content-start w-50"}>
            <p className={"badge bg-info text-wrap"}>Вы в системе</p>
            <button className={"btn btn-danger"} onClick={onLogout}>
                Выйти из системы
            </button>
        </div>
        )
        : (
        <div className={"d-flex flex-column flex-fill justify-content-start w-50"}>
            <p className={"badge bg-info text-wrap"}>Вы не в системе</p>
            <button className={"btn btn-primary"} onClick={onLogin}>
                Войти
            </button>
        </div>
        );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
