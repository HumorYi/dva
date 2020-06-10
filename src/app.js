import dva from "dva";
import "./index.css";
import { createBrowserHistory } from "history";

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});

export default app;
