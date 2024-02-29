import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © Made with <span className="love">♥</span>
            <a className="link-hover" data-hover-text="BZ Tech." target="_blank"
               rel="nofollow"
               href="www.bztech.in">BZ Tech.</a>
        </h5>
    );
}


export default Copyright;