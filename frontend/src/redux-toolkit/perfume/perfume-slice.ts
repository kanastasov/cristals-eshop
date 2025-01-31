import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FullCrystalResponse, FullPerfumeResponse, LoadingStatus, ReviewResponse } from "../../types/types";
import { fetchCristal, fetchCristalByQuery, fetchPerfume, fetchPerfumeByQuery, fetchReviewsByPerfumeId } from "./perfume-thunks";

export interface PerfumeState {
    perfume: Partial<FullPerfumeResponse>;
    reviews: Array<ReviewResponse>;
    errorMessage: string;
    loadingState: LoadingStatus;
}

export interface CrystalState {
    crystal: Partial<FullCrystalResponse>;
    reviews: Array<ReviewResponse>;
    errorMessage: string;
    loadingState: LoadingStatus;
}

export const initialState: PerfumeState = {
    perfume: {},
    reviews: [],
    errorMessage: "",
    loadingState: LoadingStatus.LOADING
};

export const initialStateCrystal: CrystalState = {
    crystal: {},
    reviews: [],
    errorMessage: "",
    loadingState: LoadingStatus.LOADING
};



export const perfumeSlice = createSlice({
    name: "perfume",
    initialState,
    reducers: {
        setPerfume(state, action: PayloadAction<FullPerfumeResponse>) {
            state.perfume = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        },
        setReview(state, action: PayloadAction<ReviewResponse>) {
            state.reviews = [...state.reviews, action.payload];
            state.loadingState = LoadingStatus.LOADED;
        },
        resetPerfumeState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPerfume.pending, (state) => {
            state.loadingState = LoadingStatus.LOADING;
        });
        builder.addCase(fetchPerfume.fulfilled, (state, action) => {
            state.perfume = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchPerfume.rejected, (state, action) => {
            state.errorMessage = action.payload!;
            state.loadingState = LoadingStatus.ERROR;
        });
        builder.addCase(fetchReviewsByPerfumeId.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchPerfumeByQuery.pending, (state) => {
            state.loadingState = LoadingStatus.LOADING;
        });
        builder.addCase(fetchPerfumeByQuery.fulfilled, (state, action) => {
            state.perfume = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchPerfumeByQuery.rejected, (state, action) => {
            state.errorMessage = action.payload!;
            state.loadingState = LoadingStatus.ERROR;
        });
    }
});



export const crystalSlice = createSlice({
    name: "crystal",
    initialStateCrystal,
    reducers: {
        setCrystal(state, action: PayloadAction<FullCrystalResponse>) {
            state.crystal = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        },
        setReview(state, action: PayloadAction<ReviewResponse>) {
            state.reviews = [...state.reviews, action.payload];
            state.loadingState = LoadingStatus.LOADED;
        },
        resetCrystalState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCristal.pending, (state) => {
            state.loadingState = LoadingStatus.LOADING;
        });
        builder.addCase(fetchCristal.fulfilled, (state, action) => {
            state.crystal = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchCristal.rejected, (state, action) => {
            state.errorMessage = action.payload!;
            state.loadingState = LoadingStatus.ERROR;
        });
        builder.addCase(fetchReviewsByPerfumeId.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchCristalByQuery.pending, (state) => {
            state.loadingState = LoadingStatus.LOADING;
        });
        builder.addCase(fetchCristalByQuery.fulfilled, (state, action) => {
            state.crystal = action.payload;
            state.loadingState = LoadingStatus.LOADED;
        });
        builder.addCase(fetchCristalByQuery.rejected, (state, action) => {
            state.errorMessage = action.payload!;
            state.loadingState = LoadingStatus.ERROR;
        });
    }
});
export const { setPerfume, setReview, resetPerfumeState } = perfumeSlice.actions;
export default perfumeSlice.reducer;
