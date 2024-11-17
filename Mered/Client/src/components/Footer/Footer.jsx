
import './Footer.css';


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-column">
        <h3>CUSTOMER SUPPORT</h3>
        <ul>
          <li><a href="#track">Track your order</a></li>
          <li><a href="#return">Return your order</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>ABOUT MERED WEAR</h3>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>BLA BLA BLA</h3>
        <ul>
          <li><a href="#blabla">Bla Blabla</a></li>
          <li><a href="#blabla2">Blabla</a></li>
          <li><a href="#blabla3">Blablabla Bla</a></li>
        </ul>
      </div>
      
    </footer>
    <div className="footer-copyright">
        Copyright ©2024, MERED Wear Israel
      </div>
    </>
    
  );
};

export default Footer;