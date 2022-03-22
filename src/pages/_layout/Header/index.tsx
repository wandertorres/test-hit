import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <img alt="Logo" />
            <Link to="/">Introdução</Link>
            <Link to="/contact">Contato</Link>
        </header>
    );
}
