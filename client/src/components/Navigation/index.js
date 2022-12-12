import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    return (
        <div id="nav">
            <ul>
            <li class="bg-dark"><Link to='/' activeStyle>
                Home
            </Link></li>
            <li class="bg-dark"><Link to='/currententries' activeStyle>
                Current Entries
            </Link></li>
            <li class="bg-dark"><Link to='/whitelist' activeStyle>
                Whitelist
            </Link></li>
            </ul>
        </div>

    );
};

export default Navigation;