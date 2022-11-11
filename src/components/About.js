const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/jamba.jpeg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Jamba. Software engineer from Ulanbator, Mongolia. I have
            rich experience in engineering and problem solving, also I am good
            at management. I love to talk with you about our unique.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 21
              </li>
              <li>
                <strong>Residence:</strong> MN
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Ulanbator, Sukhbator district
              </li>
              <li>
                <strong>Phone:</strong> +976 9115 2552
              </li>
              <li>
                <strong>E-mail:</strong> ganzojamba@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
