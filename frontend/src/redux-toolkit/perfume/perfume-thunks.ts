import { createAsyncThunk } from "@reduxjs/toolkit";

import RequestService from "../../utils/request-service";
import {CRYSTALS, CRYSTALS_GRAPHQL_CRYSTAL, PERFUMES, PERFUMES_GRAPHQL_PERFUME, REVIEW} from "../../constants/urlConstants";
import { getPerfumeByQuery } from "../../utils/graphql-query/perfume-query";
import { FullCrystalResponse, FullPerfumeResponse, ReviewResponse } from "../../types/types";

export const fetchPerfume = createAsyncThunk<Partial<FullPerfumeResponse>, string, { rejectValue: string }>(
    "perfume/fetchPerfume",
    async (perfumeId, thunkApi) => {
        try {
            const response = await RequestService.get(`${PERFUMES}/${perfumeId}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);



export const fetchCristal = createAsyncThunk<Partial<FullCrystalResponse>, string, { rejectValue: string }>(
    "crystal/fetchCrystal",
    async (crystalId, thunkApi) => {
        try {
            const response = await RequestService.get(`${CRYSTALS}/${crystalId}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);
export const fetchReviewsByPerfumeId = createAsyncThunk<Array<ReviewResponse>, string>(
    "perfume/fetchReviewsByPerfumeId",
    async (perfumeId) => {
        const response = await RequestService.get(`${REVIEW}/${perfumeId}`);
        return response.data;
    }
);

// GraphQL thunks
export const fetchPerfumeByQuery = createAsyncThunk<Partial<FullPerfumeResponse>, string, { rejectValue: string }>(
    "perfume/fetchPerfumeByQuery",
    async (perfumeId, thunkApi) => {
        try {
            const response = await RequestService.post(PERFUMES_GRAPHQL_PERFUME, {
                query: getPerfumeByQuery(perfumeId)
            });
            return response.data.data.perfume;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

// GraphQL thunks
export const fetchCristalByQuery = createAsyncThunk<Partial<FullCrystalResponse>, string, { rejectValue: string }>(
    "crystal/fetchCrystalByQuery",
    async (crystalId, thunkApi) => {
        try {
            const response = await RequestService.post(CRYSTALS_GRAPHQL_CRYSTAL, {
                query: getPerfumeByQuery(crystalId)
            });
            return response.data.data.perfume;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);




