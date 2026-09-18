function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Campus Connect</h3>
          <p>Discover, participate, and connect with your campus community.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Campus Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;