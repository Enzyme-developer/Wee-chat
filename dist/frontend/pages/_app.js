"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
const react_1 = require("@chakra-ui/react");
function App({ Component, pageProps }) {
    return (<react_1.ChakraProvider>
      <Component {...pageProps}/>
    </react_1.ChakraProvider>);
}
exports.default = App;
//# sourceMappingURL=_app.js.map