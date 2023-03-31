import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./BarilgaProduct.module.css";
const BarilgaProduct = () => {
  const { productId } = useParams();
  const CompanyData = [
    { image: "betonMashin.png", title: "БЕТОН ӨНГӨЛӨГЧ", id: 1 },
    { image: "blockMashin.png", title: "БЛОКНЫ МАШИН", id: 1 },
    { image: "heregselMashin.png", title: "ЦАХИЛГААНЫ ХЭРЭГСЭЛ", id: 1 },
    { image: "karkazMashin.png", title: "КАРКАЗ МУЖААНЫ БАГАЖ", id: 1 },
    { image: `betonMashin.png`, title: "БЕТОН ӨНГӨЛӨГЧ", id: 1 },
    { image: "blockMashin.png", title: "БЛОКНЫ МАШИН", id: 1 },
    { image: "heregselMashin.png", title: "ЦАХИЛГААНЫ ХЭРЭГСЭЛ", id: 1 },
    { image: "karkazMashin.png", title: "КАРКАЗ МУЖААНЫ БАГАЖ", id: 1 },
  ];

  console.log(productId);
  const routePath = useLocation();
  console.log(routePath);
  const handleClick = () => {};
  return (
    <div className={style.Container} onClick={handleClick}>
      <div className={style.TextBox}>
        <div className={style.Text}>
          <h1>Онцлох бүтээгдэхүүн</h1>
        </div>
        <div className={style.TextHr}>
          <div className={style.Hr}></div>
        </div>
      </div>
      <div className={style.ImContainer}>
        {CompanyData.filter((data) => (data.id = productId)).map((datas) => {
          return (
            <div className={style.ProductContainer}>
              <div className={style.TextImageCont}>
                <div className={style.HeaderImage}>
                  <span>
                    <img src={require(`../img/${datas.image}`)} alt=""  style={{ height: "20", width: "50" }}/>
                  </span>
                </div>
                <div className={style.Title}>
                  <span>{datas.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarilgaProduct;
