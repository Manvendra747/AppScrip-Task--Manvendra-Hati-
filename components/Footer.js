export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* LEFT */}
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="currency-title" >CURRENCY</h4>
          <span className="currency-icon">$</span>
          <span>USD</span>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div>
          <h5>mettā muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h5>FOLLOW US</h5>
          <div className="social-icons">
            <a href="https://instagram.com" className="social-link">
              <span className="icon"></span>
            </a>
            <span></span>
          </div>

          <h5 className="accepts-title">mettā muse ACCEPTS</h5>
          <div className="payment-icons">
            <span>GPay</span>
            <span>Visa</span>
            <span>Master</span>
            <span>Amex</span>
            <span>ApplePay</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
