// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { BillToGive, atm } from ".";

expect.extend(matchers);

test("That's a test!", () => {
  // GIVEN

  // WHEN
  const actual = atm(40);

  // THEN
  const expected: BillToGive = {
    20: 2,
  };
  expect(actual).toEqual(expected);
});

test("That's a test!", () => {
  // GIVEN

  // WHEN
  const actual = atm(50);

  // THEN
  const expected: BillToGive = {
    50: 1,
  };
  expect(actual).toEqual(expected);
});

test("That's a test!", () => {
  // GIVEN

  // WHEN
  const actual = atm(60);

  // THEN
  const expected: BillToGive = {
    50: 1,
    10: 1,
  };
  expect(actual).toEqual(expected);
});

test("That's a test!", () => {
  // GIVEN

  // WHEN
  const actual = atm(170);

  // THEN
  const expected: BillToGive = {
    50: 3,
    20: 1,
  };
  expect(actual).toEqual(expected);
});
