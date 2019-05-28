// import { Storage } from '../providers/storage';
import { Backend } from '../providers/backend';
import { TypeKeys } from '../actions/index';

const hostname = window && window.location && window.location.hostname;
const endpoint = hostname === 'localhost' ? 'http://localhost:3000' : 'https://api.fretefacil.net';

export interface SelectOrderAction {
  type: TypeKeys.SELECT_ORDER;
  orderId: string;
}

export interface ShowOrderAction {
  type: TypeKeys.SHOW_ORDER;
  orders: any[];
}

export interface PlaceOrderAction {
  type: TypeKeys.PLACE_ORDER;
  orderId: string;
}

export const showOrder = (token: string) => async (dispatch: any, _getState: any) => {
  Backend.setDomain(endpoint);
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const userId = JSON.parse(window.atob(base64))._id;
  const initialOrders = await (await Backend.getReadyOrders({ 'xAccessToken': token })).json();
  const pictures = initialOrders.map((order: any) => order.pictures).flat();
  /* const bids = initialOrders.map((order: any) => order.bids).flat();
  const bidsObj = await (await Backend.getBids({ 'xAccessToken': token, 'ids': bids.flat() })).json(); */
  const picturesObj = await(await Backend.getPictures({ 'xAccessToken': token, 'ids': pictures.flat() })).json();
  // console.log(picturesObj);
  const ordersWithPictures = initialOrders.map(async (order: any) => {
    if (order.bids.length > 0) {
      const bids = await (await Backend.getOrderBids({ 'xAccessToken': token, 'order': order._id })).json();
      const result = bids.filter((bid: any) => userId === bid.user._id);
      order.placed = result.length > 0;
    }
    for (let i = 0; i < picturesObj.length; i++) {
      const foundOne = order.pictures.indexOf(picturesObj[i]._id);
      if (foundOne !== -1) order.pictures[foundOne] = picturesObj[i];
    }
    return order;
  });
  const orders = await Promise.all(ordersWithPictures);
  // console.log(orders);
  return dispatch({
    type: TypeKeys.SHOW_ORDER,
    orders
  });
};

export const selectOrder = () => async (dispatch: any, _getState: any) => {
  return dispatch({
    type: TypeKeys.SELECT_ORDER,
    orderId: ''
  });
};

export const placeOrder = (bid: any, order: any, token: string) => async (dispatch: any, _getState: any) => {
  await (await Backend.placeBid({ 'xAccessToken': token, bid, order }));
  return dispatch({
    type: TypeKeys.PLACE_ORDER,
    orderId: order
  });
};