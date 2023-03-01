import React from "react";

const Menu = ({ items, active, setActive }) => {
  return (
<>
   
        <ul className={active ? "menu--ul--active" : "menu--ul"}>
                <div className="menu--back"
                onClick={()=> setActive(false)}
                style={{transition: active ? "4s" : "0"}}>&times;</div>

          {items.map((el) => (
            <li className="menu-li">
              <a className="menu-a" href={el.href}>
                {el.value}
              </a>
            </li>
          ))}
        </ul>
    <div onClick={() => setActive(false)} className={active ? "blur-window" : "btn-none"}></div>

   </>

  );
};

export default Menu;
