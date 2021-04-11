import React from "react";
import {Link} from "react-router-dom"

const SiteBar = () => {
    return (
        <div>            
            <Link to='/profile'>Profile</Link>
            <Link to='/needAPenny'>Need A Penny</Link>
            <Link to='/giveAPenny'>GiveAPenny</Link>            
        </div>
    );
};

export default SiteBar;