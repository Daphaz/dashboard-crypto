import { createStore } from "redux";
import reducerNotifications from "./notifications/reducerNotifications";

const store = createStore(reducerNotifications);

export default store;
