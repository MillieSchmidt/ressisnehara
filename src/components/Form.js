import { React } from "react";

const Form = () => {
    const flag = false;

    return(
        <div className="contact">
            <h1>כתבו לנו!</h1>
            <div className="contact-text">
                {flag ? <p>hi</p> : <p>no</p>}

                <p className="contact-info">
                אימייל:
                טלפון:
                </p>
            </div>
        </div>
    )
}

export default Form;