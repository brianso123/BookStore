import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// custom hook to simply things
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
