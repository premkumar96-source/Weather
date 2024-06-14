import { useNavigate } from "react-router-dom";

function SideBar() {
  const history = useNavigate();

  const todoOpen = () => {
    history("/");
  };
  const weatherOpen = () => {
    history("/weather");
  };
  return (
    <div className="sidebar">
      SideBar
      <p className="sidebar-list" onClick={todoOpen}>
        Todo List
      </p>
      <p className="sidebar-list" onClick={weatherOpen}>
        Weather
      </p>
    </div>
  );
}
export default SideBar;
