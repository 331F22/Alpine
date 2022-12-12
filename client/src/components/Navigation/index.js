import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    return (
        <div id="nav">
            <ul class="list-group">
            <li class="list-group-item"><Link to='/' activeStyle>
                Home
            </Link></li>
            <li class="list-group-item"><Link to='/currententries' activeStyle>
                Current Entries
            </Link></li>
            <li class="list-group-item"><Link to='/whitelist' activeStyle>
                Whitelist
            </Link></li>
            </ul>
        </div>

    );
};

export default Navigation;