import { PerfumesState,CrystalsState } from "./perfumes-slice";
import { CrystalResponse, LoadingStatus, PerfumeResponse } from "../../types/types";
import { RootState } from "../../store";

export const selectPerfumesState = (state: RootState): PerfumesState => state.perfumes;
export const selectPerfumes = (state: RootState): Array<PerfumeResponse> => selectPerfumesState(state).perfumes;


export const selectCrystalsState = (state: RootState): CrystalsState => state.crystals;
export const selectCrystals = (state: RootState): Array<CrystalResponse> => selectCrystalsState(state).crystals;


export const selectPagesCount = (state: RootState): number => selectPerfumesState(state).pagesCount;
export const selectTotalElements = (state: RootState): number => selectPerfumesState(state).totalElements;
export const selectIsPerfumesLoading = (state: RootState): boolean => selectPerfumesState(state).loadingState === LoadingStatus.LOADING;
