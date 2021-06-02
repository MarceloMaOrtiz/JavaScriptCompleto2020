import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

function propsRoutes(props) {
    return <Switch>
        {/* exact -> Faz com que só navegue para determinado component se o path for exato */}
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Redirect from='*' to='/'/>
    </Switch>
}

export default propsRoutes