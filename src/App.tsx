import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import UseInputPage from './pages/useInputPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/useinput" element={<UseInputPage/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
