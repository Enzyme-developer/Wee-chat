"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const authTabs = () => {
    return (<react_1.Tabs variant="soft-rounded" colorScheme="green">
      <react_1.TabList>
        <react_1.Tab w='50%'>Login</react_1.Tab>
        <react_1.Tab w='50%'>Sign up</react_1.Tab>
      </react_1.TabList>
      <react_1.TabPanels>
        <react_1.TabPanel>
          <p>one!</p>
        </react_1.TabPanel>
        <react_1.TabPanel>
          <p>two!</p>
        </react_1.TabPanel>
      </react_1.TabPanels>
    </react_1.Tabs>);
};
exports.default = authTabs;
//# sourceMappingURL=Tabs.js.map