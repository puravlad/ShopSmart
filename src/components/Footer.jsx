function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>ShopSmart</h2>
        <p>Your simple destination for everyday essentials.</p>
      </div>

      <p>
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;