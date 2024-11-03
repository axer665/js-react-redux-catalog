import './Form.scss';
import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store'
import { changeField, resetForm, saveItem } from '../../actions/actionsCreater'
import { nanoid } from 'nanoid';
import getDiscountPrice from '../../utils/getDiscountPrice';
import getShortString from '../../utils/getShortString';

export default function Form(): React.JSX.Element {
  const dispatch = useDispatch();
  const { field } = useSelector((state: RootState) => state);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target;
    dispatch(changeField(name, value, nanoid()));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (field.discount) {
      const oldprice = field.cur_price
      field.cur_price = getDiscountPrice(+field.cur_price, +field.discount);
      field.old_price = oldprice
    }
    dispatch(saveItem({ ...field, title: getShortString(field.title) }));
    dispatch(resetForm());
  }

  const handleCancel = (): void => {
    dispatch(resetForm());
  }

  return (
    <div className='form__wrap'>
      <form onSubmit={handleSubmit} className="app__form form">
        <div className="form__item item">
          <input
            value={field.title}
            name='title'
            onChange={handleChange}
            placeholder="Введите наименование товара"
            id="title"
            type="text"
            className="item__input"
            required />
          <label htmlFor="title" className="item__label">Наименование</label>
        </div>
        <div className='form__item item'>
          <input
            value={field.image}
            name='image'
            onChange={handleChange}
            placeholder="Введите ссылку на изображение"
            id="image"
            type="url"
            className="item__input"
            required />
          <label htmlFor="image" className="item__label">Изображение</label>
        </div>
        <div className='form__item item'>
          <input
            value={field.cur_price}
            name='cur_price'
            onChange={handleChange}
            placeholder="Введите стоимость товара"
            id="current_price"
            type="number"
            className="item__input"
            required />
          <label htmlFor="current_price" className="item__label">Текущая стоимость</label>
        </div>
        <div className='form__item item'>
          <input
            value={field.discount}
            name='discount'
            onChange={handleChange}
            id="discont"
            type="number"
            className="item__input"
            placeholder="Введите сумму скидки" />
          <label htmlFor="discont" className="item__label">Скидка</label>
        </div>
        <button className="form__btn">Сохранить</button>
      </form>
      <button onClick={handleCancel} className="form__btn cancel">Отменить</button>
    </div>
  )
}