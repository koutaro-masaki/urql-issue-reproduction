import { CombinedError } from "urql/core/index.js";

const non_empty = new CombinedError({
  graphQLErrors: [{ message: "Error", extensions: { code: "UNAUTHORIZED" } }],
}).graphQLErrors[0];

const empty = new CombinedError({
  graphQLErrors: [{ message: "", extensions: { code: "UNAUTHORIZED" } }],
}).graphQLErrors[0];

console.log("non-empty");
console.log("message:", non_empty.message); // `Error`
console.log("extensions:", non_empty.extensions); // `{ code: "UNAUTHORIZED" }`

console.log();

console.log("emtpy");
console.log("message:", empty.message); // `{ message: '', extensions: { code: 'UNAUTHORIZED' } }`
console.log("extensions:", empty.extensions); // `{}`
