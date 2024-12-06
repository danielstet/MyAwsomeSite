import React from 'react';
import { Link } from 'react-router-dom';
import './DesignersList.css';

const designers = [
  { id: 2, name: 'COULTURES', logo: '../assets/logos/coultures.png', link: '/artist/coultures' },
  { id: 3, name: 'MERED', logo: '../assets/logos/meredlogo.jpg', link: '/artist/mered' },
  { id: 4, name: 'WL Wear', logo: '../assets/logos/wlwear.png', link: '/artist/wl-wear' },
];

const DesignersList = () => {
  return (
    <div className="designers-grid">
      {designers.map((designer) => (
        <div key={designer.id} className="designer-card">
          <Link to={designer.link}>
            <img src={designer.logo} alt={designer.name} className="designer-logo" />
            <p className="designer-name">{designer.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DesignersList;