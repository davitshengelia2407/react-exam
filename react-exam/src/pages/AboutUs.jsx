import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <h1>About Our Learning Platform</h1>

        <p>
          We are an online education platform focused on helping students
          develop modern programming skills. Our courses provide practical
          knowledge in web development and technology.
        </p>

        <p>
          We offer structured lessons created by experienced lecturers,
          allowing beginners and advanced developers to improve their skills
          and build real-world projects.
        </p>

        <div className="aboutCards">
          <div className="aboutCard">
            <h3>Quality Courses</h3>
            <p>Learn through practical and well-organized lessons.</p>
          </div>

          <div className="aboutCard">
            <h3>Expert Lecturers</h3>
            <p>Get guidance from experienced professionals.</p>
          </div>

          <div className="aboutCard">
            <h3>Career Growth</h3>
            <p>Develop skills needed for modern technology jobs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;