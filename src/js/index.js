//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

import { InputList } from "./component/inputList.js";

//render your react application
ReactDOM.render(<InputList />, document.querySelector("#app"));
