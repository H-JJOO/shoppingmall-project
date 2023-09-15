import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goTologin = () => {
    navigate("/login");
  };

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
      <div className="login">
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
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
