import './App.css'
import Login from './components/login/Login';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import {LOGIN} from './components/constants/constants';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="" element={<Navigate to={`${LOGIN}`} />} />
      <Route path={`/${LOGIN}`} element={<Login/>} />
      <Route path="/*" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="*" element={<PageNotFound redirectPath={`/${LOGIN}`}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
