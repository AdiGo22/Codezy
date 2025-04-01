import './App.scss';
import Login from './components/login/Login';
import Home from './components/home/Home';
//import PageNotFound from './components/pageNotFound/PageNotFound';
import {LOGIN, REGISTER} from './components/constants/constants';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ErrorBoundary from './ErrorBoundary';
import Register from './components/register/Register';
function App() {
  return (
    <>
    <ErrorBoundary>
    <Router>
      <Routes>
      <Route path="" element={<Navigate to={`${LOGIN}`} />} />
      <Route path={`/${LOGIN}`} element={<Login/>} />
      <Route path = {REGISTER} element = {<Register/>} />
      <Route path="/*" element={<PrivateRoute><Home/></PrivateRoute>} /> 
      {/* <Route path="*" element={<PageNotFound redirectPath={`/${LOGIN}`}/>} /> */}
      </Routes>
    </Router>
    </ErrorBoundary>
    </>
  )
}

export default App;
