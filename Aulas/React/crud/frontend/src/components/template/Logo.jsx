import './Logo.css'

import logo from '../../assets/imgs/logo.png'

import { Link } from 'react-router-dom' 

function propsLogo(props) {
    return <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>
}

export default propsLogo