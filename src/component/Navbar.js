import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div onClick={() => navigate("/login")} className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          onClick={() => navigate("/")}
          alt="logo"
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
        />
      </div>

      <div className="menu-area">
        <ul class="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
