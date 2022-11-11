const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2022 - Present</div>
                <div className="name">
                  Software Engineer - MobiCom Corporation LLC.
                </div>
                <div className="text">
                  Collaborate with creative and development teams on the
                  outsourcing projects.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2020 - 2022</div>
                <div className="name">
                  Fullstack Developer - Zochil ecommerce platform
                </div>
                <div className="text">
                  Building stable and maintainable codebases using modern
                  technologies.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2019 - 2020</div>
                <div className="name">
                  Front-End Developer - Logix Fiber Networks.
                </div>
                <div className="text">
                  Optimize your website and apps performance using latest
                  technology.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2019 - 2022</div>
                <div className="name">
                  National University of Mongolia - Mongolia
                </div>
                <div className="text">
                  Bachelors Degree in Computer Science, Ulaanbaatar, Mongolia.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2020</div>
                <div className="name">Programming Course - Nest Academy</div>
                <div className="text">
                  Coursework - Git, WordPress, Javascript, iOS, Android, CSS,
                  and JavaScript.
                </div>
              </div>
              {/* <div className="resume-item content-box">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course - London</div>
                <div className="text">
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
