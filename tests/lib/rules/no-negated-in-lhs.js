/**
 * @fileoverview Tests for the no-negated-in-lhs rule
 * @author Michael Ficarra
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/no-negated-in-lhs", {
    valid: [
        "a in b",
        "!(a in b)"
    ],
    invalid: [
        { code: "!a in b", errors: [{ message: "The `in` expression's left operand is negated", type: "BinaryExpression"}] }
    ]
});
