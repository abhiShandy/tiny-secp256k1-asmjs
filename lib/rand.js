import { getRandomBytes } from "expo-crypto";
export function generateInt32() {
  return getRandomBytes(4).readInt32BE(0);
}
