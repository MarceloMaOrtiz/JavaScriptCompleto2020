import './Logo.css'

import logo from '../../assets/imgs/logo.png'


function propsLogo(props) {
    return <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>
}

export default propsLogo