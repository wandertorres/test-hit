import { Link } from "react-router-dom";

type propsButton = {
    title: string,
    link: string,
    type: string
}

export const Button = ( props: propsButton) => {
    return(
        <Link className={ `button-container button-container${ props.type }` } to={ props.link }>
            <span className="button-title">{ props.title }</span>
        </Link>
    );
}