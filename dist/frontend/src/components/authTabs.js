"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Login_1 = __importDefault(require("./Login"));
const Signup_1 = __importDefault(require("./Signup"));
const AuthTabs = () => {
    return (<react_1.Tabs variant="soft-rounded" colorScheme="green" bg='white' p='4' borderRadius='10'>
      <react_1.TabList>
        <react_1.Tab w="50%">Login</react_1.Tab>
        <react_1.Tab w="50%">Sign up</react_1.Tab>
      </react_1.TabList>
      <react_1.TabPanels>
        <react_1.TabPanel>
          <Login_1.default />
        </react_1.TabPanel>
        <react_1.TabPanel>
          <Signup_1.default />
        </react_1.TabPanel>
      </react_1.TabPanels>
    </react_1.Tabs>);
};
exports.default = AuthTabs;
//# sourceMappingURL=AuthTabs.js.map