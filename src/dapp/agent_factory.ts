import { createActor as counterCreateActor } from "../declarations/counter";

export const counterCanisterId = import.meta.env.VITE_APP_COUNTER_CANISTER_ID;

export const counterAgent = counterCreateActor(
  counterCanisterId?.toString() ?? "no canister id provided for counter",
);
