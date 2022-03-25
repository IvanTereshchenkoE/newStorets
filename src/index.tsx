import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import Mainapp from "./Mainapp";

import { store } from "./store";

ReactDOM.render(<Provider store={store}><Mainapp /></Provider>, document.getElementById("root"));
