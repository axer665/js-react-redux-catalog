import { IForm, IAction } from '../interfaces/interfaces';
import { Actions } from '../actions/actionsTypes';

const initialState: IForm = {
  id: '',
  image: '',
  discount: '',
  title: '',
  old_price: '',
  cur_price: ''
}

const formReducer = (state = initialState, action: IAction): IForm => {
  switch (action.type) {
    case Actions.CHANGE_FIELD: {
      const {name, value, id} = action.payload;
      return {...state, [name]: value, id};
    }
    case Actions.RESET_FORM:
      return {
        id: '',
        image: '',
        discount: '',
        title: '',
        old_price: '',
        cur_price: ''
      }
    default:
      return state;
  }
}

export default formReducer;