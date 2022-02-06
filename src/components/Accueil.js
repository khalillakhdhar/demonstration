import React from "react";
import { NavLink } from "react-router-dom";
const Accueil=()=>
{
    return(
        <div><h1>bienvenu</h1><br />
        <NavLink to="propos">à propos de nous</NavLink><NavLink to="Form">Contactez nous</NavLink>
        </div>
    );
}
export default Accueil;