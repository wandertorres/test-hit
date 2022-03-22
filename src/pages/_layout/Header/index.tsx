import { Logo } from "../../../components";
import { Button } from "../../../components/Button";

export const Header = () => {
    return(
        <header className="header-container">
            <Logo className="header-logo" />
            <nav className="header-nav">
                <Button title="Introdução" link="/" type="--nav" />
                <Button title="Contato" link="/contact" type="--nav" />
            </nav>
        </header>
    );
}
