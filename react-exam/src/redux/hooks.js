import { useSyncExternalStore } from "react";
import { store } from "./store";

export function useDispatch() {
  return store.dispatch;
}

export function useSelector(selector) {
  return useSyncExternalStore(store.subscribe, () => selector(store.getState()));
}
