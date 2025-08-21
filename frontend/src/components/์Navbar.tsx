import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <nav className='Navstyle'>
      <div className="NavLeft">
        <Link to="/" className="NavLink">🚘 Home</Link>
        <Link to="/sell" className="NavLink">🏷️ รายการขาย</Link>
        <Link to="/rent" className="NavLink">📆 รายการให้เช่า</Link>
        <Link to="/summarry" className="NavLink">📈 สรุปยอด</Link>
        <Link to="/employee" className="NavLink">👨🏻‍💼 จัดการพนักงาน</Link>
      </div>

      <div className="NavRight">
        <div className="Profile" onClick={toggleProfileMenu}>
          👨🏻‍💻 Admin ▼
        </div>
        {showProfileMenu && (
          <div className="ProfileDropdown">
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
