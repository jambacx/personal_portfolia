const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: ganzojamba@gmail.com</p>
        <p>T: +976 9115 2552</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/thejamba/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/jamba_gz/"
          >
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
