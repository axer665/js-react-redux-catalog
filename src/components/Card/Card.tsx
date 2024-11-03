import './Card.scss';
import { IForm } from '../../interfaces/interfaces'
import React from "react";

export default function Card({ image, discount, old_price, cur_price, title }: IForm): React.JSX.Element {
  return (
    <div className="card">
      <a href={image} target="blanc" className="card__link">
        <div className="card__img">
          <img src={image} alt="" />
        </div>
        {discount ? <div className='card__discont'>-{discount}%</div> : null}
        <div className="card__price price">
          <div className="price__current">{cur_price}<span className="icon-ruble"></span></div>
          {discount ?  <div className="price__old"><del>{old_price}</del><span className="icon-ruble"></span></div> : null}
        </div>
        <div className="card__title">{title}</div>
      </a>
      <button className="card__btn">В корзину</button>
    </div>
  )
}