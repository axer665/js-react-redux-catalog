import './CardList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Card from '../Card/Card';
import React from "react";

export default function CardList(): React.JSX.Element {
  const { list } = useSelector((state: RootState) => state);

  return (
    <ul className="app__list list">
      {list && list.map((el) => <Card key={el.id} {...el} />)}
    </ul>
  )
}