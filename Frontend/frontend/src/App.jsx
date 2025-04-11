import './App.scss';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { READ } from './components/constants/constants';
//import PageNotFound from './components/pageNotFound/PageNotFound';
import {LOGIN, REGISTER , WRITE} from './components/constants/constants';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ErrorBoundary from './ErrorBoundary';
import Register from './components/register/Register';
import Write from './components/write/Write';
import Read from './components/read/Read';
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
      <Route path={WRITE} element={<Write />} />
      <Route path={READ} element={<Read />} />
      {/* <Route path="*" element={<PageNotFound redirectPath={`/${LOGIN}`}/>} /> */}
      </Routes>
    </Router>
    </ErrorBoundary>
    </>
  )
}

export default App;
