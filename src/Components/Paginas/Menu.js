import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {

    return (
        <Fragment>
            <h1 className="text-3xl font-light mb-4">Menu</h1>
            <Link to="/nuevo-platillo" 
            className=" bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Nuevo Platillo
            </Link>
        </Fragment>
    )
}

export default Menu;