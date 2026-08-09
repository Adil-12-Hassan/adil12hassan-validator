import test from "node:test";
import assert from "node:assert";
import {
    isRequired,
    isEmail,
    isNumber,
    isString,
    isURL,
    isStrongPassword,
    isPhoneNumber,
    isUsername
} from "../src/validator.js";

test("isRequired", () => {
    assert.strictEqual(isRequired("Hassan"), true);
    assert.strictEqual(isRequired(""), false);
});

test(isEmail, () => {
    assert.strictEqual(isEmail("test@example.com"), true);
    assert.strictEqual(isEmail("invalid-email"), false);
});

test(isNumber, () => {
    assert.strictEqual(isNumber(123), true);
    assert.strictEqual(isNumber("123"), false);
});

test(isString, () => {
    assert.strictEqual(isString("Hello"), true);
    assert.strictEqual(isEmail(123), false);
});

test(isURL, () => {
    assert.strictEqual(isEmail("https://exmaple.com"), true);
    assert.strictEqual(isEmail("not-a-url"), false);
});

test(isStrongPassword, () => {
    assert.strictEqual(isEmail("Hassan@123"), true);
    assert.strictEqual(isEmail("password"), false);
});

test("isPhoneNumber", () => {
    assert.strictEqual(isPhoneNumber("+923281511293"), true);
    assert.strictEqual(isPhoneNumber("123"), false);
});

test("isUsername", () => {
    assert.strictEqual(isUsername("Hassan_123"), true);
    assert.strictEqual(isUsername("ab"), false);
});