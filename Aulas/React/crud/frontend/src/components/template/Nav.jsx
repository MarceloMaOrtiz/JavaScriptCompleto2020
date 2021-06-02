import "./Nav.css"

import NavItem from "./NavItem"

function propsNav(props) {
    return <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa */}
            <NavItem url="/" icon="home" item="Início"></NavItem>
            <NavItem url="/users" icon="users" item="Usuários"></NavItem>
        </nav>
    </aside>
}

export default propsNav