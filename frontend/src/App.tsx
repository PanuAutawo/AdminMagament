import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/์Navbar';
import HomePage from './pages/admin/stock/HomPage';
import SellListPage from './pages/admin/sell/SellListPage';
import AddSellPage from './pages/admin/sell/AddSellPage';
import EditSellPage from './pages/admin/sell/EditSellPage';
import RentListPage from './pages/admin/rent/RentListPage';
import AddRentPage from './pages/admin/rent/AddRentPage';
import EditRentPage from './pages/admin/rent/EditRentPage';
import CreateSellCar from './pages/admin/sell/CreateSellCarPage';
import CreateRentCarPage from './pages/admin/rent/CreateRentCarPage';
import AddnewCarPage from './pages/admin/stock/AddnewCarPage';
import EditCarTentPage from './pages/admin/stock/EditCarTentPage';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/registerNewcar"element={<AddnewCarPage />} />
          <Route path="/stock/edit/:id" element={<EditCarTentPage />} />
          {/* Sell */}
          <Route path="/sell" element={<SellListPage />} />
          <Route path="/sell/add" element={<AddSellPage />} />
          <Route path="/sell/add/:id" element={<CreateSellCar />} />
          <Route path="/sell/edit/:id" element={<EditSellPage />} />
          {/* Rent */}
          <Route path="/rent" element={<RentListPage />} />
          <Route path="/rent/add" element={<AddRentPage />} />
          <Route path="/rent/add/:id" element={<CreateRentCarPage />} />
          <Route path="/rent/edit/:id" element={<EditRentPage />} />
          

          {/* Rent Routes แบบเดียวกัน */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
