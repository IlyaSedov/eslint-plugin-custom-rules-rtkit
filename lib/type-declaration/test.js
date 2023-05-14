const rule = require("./index");
const RuleTester = require("eslint").RuleTester;

const errorMassage =
"Type names must start with a capital letter and be prefixed with T.";
const ASTNodeType = "Identifier";

const ruleTester = new RuleTester({parser: require.resolve('@typescript-eslint/parser')})
ruleTester.run("type-declaration-test", rule, {
  valid: [{ code: "type TMassege = {x:string}" }],
  invalid: [
    {
      code: "type Massage = {x:string}",
      errors: [
        {
          message: errorMassage,
          type: ASTNodeType,
        },
      ],
    },
    {
      code: "type Tassage = {x:string}",
      errors: [
        {
          message: errorMassage,
          type: ASTNodeType,
        },
      ],
    },
    {
      code: "type tMassage = {x:string}",
      errors: [
        {
          message: errorMassage,
        },
      ],
    },
    {
      code: "type Tmassage = {x:string}",
      errors: [
        {
          message: errorMassage,
          type: ASTNodeType,
        },
      ],
    },
    {
      code: "type tmassage = {x:string}",
      errors: [
        {
          message: errorMassage,
          type: ASTNodeType,
        },
      ],
    },
  ],
});
