import { legacy_createStore as createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";




export const store = createStore(AuthReducer)