import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// É possível que a utilização do BrowserRouter não faça automaticamente o redirecionamento
// das URL's em produção, sendo necessário a utilização do apache ou nginx configurado para isso
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

function propsApp(props) {
    return <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>
}

export default propsApp