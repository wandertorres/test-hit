import React from "react";
import { Button } from "../../components/Button";

export const Contact = () => {
    return(
        <section className="contact-container">
            <header className="contact-header">
                <h1 className="header-title">Contato</h1>
                <div className="line-container">
                    <div className="line-base"></div>
                    <div className="line-effect"></div>
                </div>
            </header>

            <form className="contact-form">
                <div className="form-input_area">
                    <input type="text" placeholder="Nome*" />
                    <input type="text" placeholder="E-mail*" />
                </div>
                <textarea className="form-text_area" placeholder="Mensagem*"></textarea>
                <Button title="Salvar" link="/" type="--form" />
            </form>
        </section>
    );
}
