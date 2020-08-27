import React from "react";
import Carousel from "./Carousel";

import Perfil1 from "../assets/images/img-perfil-1.jpeg";
import Perfil2 from "../assets/images/img-perfil-2.jpeg";
import Perfil3 from "../assets/images/img-perfil-3.jpg";

const Header = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const items = [
  //     { Perfil1 },
  //     { Perfil2 },
  //     { Perfil3 },
  //     { Perfil1 },
  //     { Perfil2 },
  //     { Perfil3 },
  //     { Perfil1 },
  //   ];

  return (
    <header>
      <Carousel items={items} active={0} />
    </header>
  );
};

export default Header;
