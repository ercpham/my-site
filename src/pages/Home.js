import "../styles/Home.css";
import Landing from "../components/Landing";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <main className="home h-fade">
      <Landing />
      <h6 className="about">About Me</h6>
      <Carousel />
    </main>
  );
}

export default Home;
