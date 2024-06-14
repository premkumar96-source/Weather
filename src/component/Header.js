import { useState } from "react";
import menu from "../assets/menuicons.png";
import SideBar from "./Leftmenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //   function openSideBar() {
  //     setIsOpen(!isOpen);
  //     // openSideBar(isOpen);
  //   }
  return (
    <>
      <div className="header">Header</div>
    </>
  );
}
export default Header;
