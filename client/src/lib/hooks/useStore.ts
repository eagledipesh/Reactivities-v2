import { useContext } from "react";
import { StoreConext } from "../stores/store";

export function useStore() {
    return useContext(StoreConext);
}