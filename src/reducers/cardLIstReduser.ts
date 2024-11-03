import { IAction, IForm } from '../interfaces/interfaces';
import { Actions } from '../actions/actionsTypes';

type ICardList = IForm[];

const initialState: ICardList = [
  {
    id: 'T36mP4nKrS',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    discount: '',
    title: 'Mens Cotton Jacke',
    old_price: '',
    cur_price: '10000',
  },
  {
    id: 'dT-nCj60k3',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    discount: '',
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    old_price: '',
    cur_price: '7000',
  },
  {
    id: 'XXnz_Je1Az',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    discount: '30',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    old_price: '3000',
    cur_price: '2950',
  },
];

const cardListReducer = (state = initialState, action: IAction): ICardList => {
  switch (action.type) {
    case Actions.SAVE_ITEM: {
      const {image, discount, old_price, cur_price, title, id} = action.payload
      return [...state, {image, discount, old_price, cur_price, title, id}];
    }
    default:
      return state;
  }
}

export default cardListReducer;