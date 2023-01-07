"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("@chakra-ui/react");
const Login = () => {
    const [show, setShow] = (0, react_1.useState)(false);
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const setGuestCredentials = () => {
        setEmail("johndoe@gmail.com");
        setPassword("123456");
    };
    return (<react_2.VStack spacing={4} align="stretch">
      <react_2.Box>
        <react_2.FormControl isRequired>
          <react_2.FormLabel>Email address</react_2.FormLabel>
          <react_2.Input type="email" placeholder="Input your email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </react_2.FormControl>
      </react_2.Box>
      <react_2.Box>
        <react_2.FormControl isRequired>
          <react_2.FormLabel>Password</react_2.FormLabel>
          <react_2.InputGroup size="md">
            <react_2.Input type={show ? "text" : "password"} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <react_2.InputRightElement width="4.5rem">
              <react_2.Button h="100%" bg="gray.200" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </react_2.Button>
            </react_2.InputRightElement>
          </react_2.InputGroup>
        </react_2.FormControl>
      </react_2.Box>
      <react_2.Box>
        <react_2.Button bg="blue.500" w="100%" my="4" color="white" onClick={handleSubmit}>
          Submit
        </react_2.Button>
      </react_2.Box>
      <react_2.Box>
        <react_2.Button bg="red.500" w="100%" mb="4" color="white" onClick={setGuestCredentials}>
          Get guest credentials
        </react_2.Button>
      </react_2.Box>
    </react_2.VStack>);
};
exports.default = Login;
//# sourceMappingURL=Login.js.map