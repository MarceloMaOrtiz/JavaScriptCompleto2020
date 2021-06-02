import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { HashRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

function propsApp(props) {
    return <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>
}

export default propsApp