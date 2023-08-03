import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import GiftCards from './pages/GiftCards.jsx'
import Error404 from './pages/Error404.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/giftcards" element={<GiftCards />} />
        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
