import { configureStore } from "@reduxjs/toolkit";

import perfumesSlice, { crystalsSlice, CrystalsState, PerfumesState } from "./redux-toolkit/perfumes/perfumes-slice";
import perfumeSlice, { crystalSlice, CrystalState, PerfumeState } from "./redux-toolkit/perfume/perfume-slice";
import userSlice, { UserState } from "./redux-toolkit/user/user-slice";
import ordersSlice, { OrdersState } from "./redux-toolkit/orders/orders-slice";
import orderSlice, { OrderState } from "./redux-toolkit/order/order-slice";
import cartSlice, { CartState } from "./redux-toolkit/cart/cart-slice";
import authSlice, { AuthState } from "./redux-toolkit/auth/auth-slice";
import adminSlice, { AdminState } from "./redux-toolkit/admin/admin-slice";

export interface RootState {
    admin: AdminState;
    auth: AuthState;
    cart: CartState;
    order: OrderState;
    orders: OrdersState;
    perfume: PerfumeState;
    perfumes: PerfumesState;
    user: UserState;
    crystal: CrystalState;
    crystals: CrystalsState;
}

export const storeReducer = {
    admin: adminSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    orders: ordersSlice,
    perfume: perfumeSlice,
    perfumes: perfumesSlice,
    user: userSlice,
    crystal: crystalSlice,
    crystals: crystalsSlice,
};

export const store = configureStore({
    reducer: storeReducer
});
