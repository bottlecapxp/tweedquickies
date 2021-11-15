import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Form from './components/Form/Form'
import Loading from './components/Loading/Loading';
import ChooseOption from './Pages/ChooseOption';
import Info from './Pages/Info';
import Terms from './Pages/Terms';
import Thankyou from './Pages/Thankyou';

function App() {
  return (
<Router> 
  <Switch>
    <Route path='/' exact strict component={Form}></Route>
    <Route path='/thank-you' exact strict component={Thankyou}></Route>
    <Route path='/loading' exact strict component={Loading}></Route>
    <Route path='/option' exact strict component={ChooseOption}></Route>
    <Route path='/tweed-info/:strain' exact strict component={Info}></Route>
    <Route path='/terms' exact strict component={Terms}></Route>
  </Switch>
</Router>
  );
}

export default App;
