import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    // 상세페이지로 이동
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-cusor" onClick={showDetail}>
      <img width={300} src={item.img} />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.new ? "Conscious choice" : ""}</div>
      <div>{item.price}원</div>
      <div>{item.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
