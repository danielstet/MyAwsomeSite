import React from 'react';
import { Link } from 'react-router-dom';
import './DesignersList.css';
import coulturesLogo from '../../assets/logos/coultures.png';
import meredLogo from '../../assets/logos/meredlogo.jpg';
import wlWearLogo from '../../assets/logos/wlwear.png';

const designers = [
  { id: 2, name: 'COULTURES', logo: coulturesLogo, link: '/artist/coultures' },
  { id: 3, name: 'MERED', logo: meredLogo, link: '/artist/mered' },
  { id: 4, name: 'WL Wear', logo: wlWearLogo, link: '/artist/wl-wear' },
  

];

const DesignersList = () => {
  return (
    <div className="designers-grid">
      {designers.map((designer) => (
        <div key={designer.id} className="designer-card">
          <Link to={designer.link}>
            <div className="designer-logo-container">
              <img src={designer.logo} alt={designer.name} className="designer-logo" />
            </div>
            <p className="designer-name">{designer.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DesignersList;