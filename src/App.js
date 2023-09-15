import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import PrivateRoute from "./route/PrivateRoute";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";

// 1. 메인페이지, 로그인페이지, 상세상품페이지
// 2. 모든 페이지에 공통적으로 들어가는 헤더(로그인, 로그아웃버튼, 제목, 여성옷, 남성옷 등등, 검색), 푸터(회사정보, 고객센터)
// 3. 메인페이지에는 상품목록(이미지, 상품명, 가격, 신제품여부, 등등)
// 4. 로그인페이지에는 아이디, 비밀번호, 로그인버튼
// 5. 메인페이지의 상품목록 클릭시 상세상품페이지로 이동 (단, 로그인 시 상세상품페이지로 이동, 비로그인 시 로그인창으로 이동)
// 6. 로그인 성공시 메인페이지로 이동, 로그인 실패시 로그인페이지로 이동
// 7. 로그인 성공시 헤더에는 로그아웃버튼이 보이고, 로그아웃시 로그인버튼이 보임
// 8. 상세상품페이지에는 이미지, 상품명, 가격, 등등 정보가 보임

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {}, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
