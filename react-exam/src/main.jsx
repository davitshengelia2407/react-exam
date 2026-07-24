// <<<<<<< HEAD
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
// =======
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.module.css";

createRoot(document.getElementById("root")).render(<App />);
// >>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
