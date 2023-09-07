import { getRandomBytes } from "expo-crypto";

// Only to be used to initialize the context for rust-secp256k1
export function generateInt32() {
  const array = getRandomBytes(4);
  return (
    (array[0] << (3 * 8)) +
    (array[1] << (2 * 8)) +
    (array[2] << (1 * 8)) +
    array[3]
  );
}
