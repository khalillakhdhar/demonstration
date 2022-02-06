import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './components/Accueil';
import Form from './components/Form';
import Propos from './components/Propos';
function App() {
  return (
    <Router>
      <div>
        <Accueil/>
      </div>
<Routes>
<Route path='/propos' element={<Propos/>}/>
<Route path='/Form' element={<Form/>}/>


</Routes>

    </Router>
  );
}

export default App;
