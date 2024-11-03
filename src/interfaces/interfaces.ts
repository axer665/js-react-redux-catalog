export interface IForm {
  id: string
  image: string,
  discount: string,
  old_price: string,
  cur_price: string,
  title: string
}

export interface IAction {
  type: string,
  payload: { [key: string]: string }
}