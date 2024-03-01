import Header from "../components/header";

import earth from "../assets/planet-earth.svg";
import Planet from "../components/planet";

const Earth = () => {
  return (
    <div>
      <Header />

      <main className="mt-32 flex justify-center items-center">
        <div className="planet">
          <img src={earth} alt="Earth" className="px-48" />
        </div>
        <div className="planetInfo">
          <Planet planetName="Earth" />
        </div>
      </main>
    </div>
  );
};

export default Earth;
