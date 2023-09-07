"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInt32 = void 0;
const { getRandomBytes } = require("expo-crypto");
// Only to be used to initialize the context for rust-secp256k1
function generateInt32() {
  const array = getRandomBytes(4);
  return (
    (array[0] << (3 * 8)) +
    (array[1] << (2 * 8)) +
    (array[2] << (1 * 8)) +
    array[3]
  );
}
exports.generateInt32 = generateInt32;
