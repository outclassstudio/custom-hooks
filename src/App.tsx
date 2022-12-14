import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import UseInputPage from './pages/useInputPage';
import UseTabsPage from './pages/useTabsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/useinput" element={<UseInputPage/>}/>
        <Route path="/usetabs" element={<UseTabsPage/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
