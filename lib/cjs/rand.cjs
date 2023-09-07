"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInt32 = void 0;
const crypto_1 = require("expo-crypto");
function generateInt32() {
  return (0, crypto_1.getRandomBytes)(4).readInt32BE(0);
}
exports.generateInt32 = generateInt32;
