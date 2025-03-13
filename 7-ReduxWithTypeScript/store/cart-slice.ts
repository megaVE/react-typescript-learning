import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

export type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>) {},
		removeFromCart(state, action) {},
	},
});
