import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>Hi, I'm Bartholomew</h1>
      <p>I'm a web developer in training who builds responsive sites and JavaScript apps.</p>
      <Link to="/projects" className="button">
        See my projects
      </Link>
    </section>
  );
}

export default Home;