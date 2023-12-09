import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <Link to='/' className="link">עמוד הבית</Link>
            |<Link to='/publish' className="link">לפרסום ספר</Link>
            |<Link to='/contact' className="link">צור קשר</Link>
        </div>
    )
}

export default Navigation;