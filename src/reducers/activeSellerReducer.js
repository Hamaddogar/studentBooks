export const activeSellerReducer = (state = {}, action) => action.type === "active_seller" ? action.payload : state;