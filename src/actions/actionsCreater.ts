import { Actions } from './actionsTypes';
import { IAction, IForm } from '../interfaces/interfaces';

export const changeField = (name: string, value: string, id: string): IAction => {
  return { type: Actions.CHANGE_FIELD, payload: { name, value, id } };
}

export const resetForm = () => {
  return { type: Actions.RESET_FORM }
}

export const saveItem = (item: IForm): IAction => {
  return { type: Actions.SAVE_ITEM, payload: { ...item } }
}