import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from './components/header';
import BlankPage from './pages/BlankPage';

function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <BlankPage />}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
    
  );
}

export default App;
