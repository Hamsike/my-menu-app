import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Menu } from './pages/Menu/Menu';

function App() {
  return (
    <BrowserRouter basename="/my-menu-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<Navigate replace to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
