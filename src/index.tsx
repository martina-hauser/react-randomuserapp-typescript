import * as React from "react";
import { render } from "react-dom";

import App from "./App";

window.ReactApp = {};
window.ReactApp.profileAPI = "https://randomuser.me/api/";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
