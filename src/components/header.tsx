const Header = () => {
  return (
    <header className="border-b border-white border-opacity-20 w-full h-auto px-8 py-6 flex justify-between items-center">
      <div className="title">
        <h1 className="text-white font-normal text-[1.75rem]">THE PLANETS</h1>
      </div>

      <ul className="flex justify-center items-center gap-8">
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          MERCURY
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          VENUS
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          EARTH
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          MARS
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          JUPITER
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          SATURN
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          URANUS
        </li>
        <li className="text-white opacity-80 text-base font-bold leading-6 uppercase">
          NEPTUNE
        </li>
      </ul>
    </header>
  );
};

export default Header;
