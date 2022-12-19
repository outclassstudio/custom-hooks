import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import UseClickPage from './pages/useClickPage';
import UseConfirmPage from './pages/useConfirmPage';
import UseInputPage from './pages/useInputPage';
import UsePreventLeavePage from './pages/usePreventLeavePage';
import UseTabsPage from './pages/useTabsPage';
import UseTitlePage from './pages/useTitlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/useinput" element={<UseInputPage/>}/>
        <Route path="/usetabs" element={<UseTabsPage/>}/>
        <Route path="/usetitle" element={<UseTitlePage/>}/>
        <Route path="/useclick" element={<UseClickPage/>}/>
        <Route path="/useconfirm" element={<UseConfirmPage/>}/>
        <Route path="/usepreventleave" element={<UsePreventLeavePage/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
