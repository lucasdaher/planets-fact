import sourceIcon from "../assets/icons/icon-source.svg";

import data from "../data.json";
import React from "react";
import Button from "./button";

interface PlanetInfoProps {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

interface Props {
  planetName: string;
}

interface State {
  planet: PlanetInfoProps | null;
  activeButton: string;
}

class Planet extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      planet:
        data.find((planet) => planet.name === this.props.planetName) || null,
      activeButton: "01",
    };
  }

  setActiveButton = (value: string) => {
    this.setState({ activeButton: value });
  };
  render() {
    return (
      <div>
        {this.state.planet && (
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="text-white font-normal uppercase text-[5rem]">
              {this.state.planet.name}
            </h1>
            <p className="text-white font-normal font-spartan text-sm w-[21.875rem]">
              {this.state.planet.overview.content}
            </p>

            <h2 className="flex justify-center items-center text-gray font-normal font-spartan gap-2">
              Source:
              <a
                href={this.state.planet.overview.source}
                target="_blank"
                className="font-bold underline font-spartan"
              >
                Wikipedia
              </a>
              <img src={sourceIcon} alt="Source Icon" />
            </h2>

            <div className="flex flex-col justify-start items-center gap-4">
              <Button
                planet={this.state.planet.name}
                value={"01"}
                text="Overview"
                activeButton={this.state.activeButton}
                setActiveButton={this.setActiveButton}
              />
              <Button
                planet={this.state.planet.name}
                value={"02"}
                text="Internal Structure"
                activeButton={this.state.activeButton}
                setActiveButton={this.setActiveButton}
              />
              <Button
                planet={this.state.planet.name}
                value={"03"}
                text="Surface Geology"
                activeButton={this.state.activeButton}
                setActiveButton={this.setActiveButton}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Planet;
