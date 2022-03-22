import { Link } from "react-router-dom";

type propsButton = {
    title: string,
    link: string,
    type: string
}

export const Button = ( props: propsButton) => {
    return(
        <div className={ `button-container button-container${ props.type }` }>
            <Link className="button-title" to={ props.link }>{ props.title }</Link>
        </div>
    );
}