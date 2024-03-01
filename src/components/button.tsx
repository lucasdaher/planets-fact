import React from "react";

interface ButtonProps {
  text?: string;
  value: string;
  planet: string;
  activeButton: string;
  setActiveButton: (value: string) => void;
}

type ButtonState = "active" | "normal";

class Button extends React.Component<ButtonProps> {
  handleClick = () => {
    this.props.setActiveButton(this.props.value);
  };

  render() {
    const state: ButtonState =
      this.props.activeButton === this.props.value ? "active" : "normal";
    return (
      <>
        {this.props.planet === "Earth" && (
          <button
            onClick={this.handleClick}
            type="button"
            className={`pl-7 flex justify-start items-center w-[21.875rem] h-12 ${
              state === "active"
                ? "bg-purple border-opacity-0"
                : "bg-transparent border border-white border-opacity-20"
            }  text-white text-base font-bold font-spartan leading-none uppercase transition-all duration-200 outline-none hover:bg-gray-blue hover:border-opacity-0`}
          >
            <div className="flex justify-center items-center gap-7">
              <h3 className="text-white opacity-50 text-base font-bold leading-none">
                {this.props.value}
              </h3>
              <h3>{this.props.text}</h3>
            </div>
          </button>
        )}
      </>
    );
  }
}

export default Button;
