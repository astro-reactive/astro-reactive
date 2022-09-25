// Do not write code directly here, instead use the `src` folder!

// What you should do here is re-exports all the things you want your user to access, ex:
// export { HelloWorld } from "./src/main.ts"
// export type { HelloWorldResult } from "./src/types.ts"
import Form from './src/Form.astro';
export default Form;
export {FormGroup, FormControl} from './src/index';
