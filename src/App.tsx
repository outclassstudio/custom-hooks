import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import UseBeforeLeavePage from './pages/useBeforeLeavePage';
import UseClickPage from './pages/useClickPage';
import UseConfirmPage from './pages/useConfirmPage';
import UseFadeinPage from './pages/useFadeInPage';
import UseInputPage from './pages/useInputPage';
import UseNetworkPage from './pages/useNetworkPage';
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
        <Route path="/usebeforeleave" element={<UseBeforeLeavePage/>}/>
        <Route path="/usefadein" element={<UseFadeinPage/>}/>
        <Route path="/usenetwork" element={<UseNetworkPage/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
