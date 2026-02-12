import {
  MerkleProof,
  MerkleProofLeo
} from "../types/merkle_tree";
import {
  leo2js,
  tx,
  parseJSONLikeString
} from "@doko-js/core";
import {
  PrivateKey,
  Account,
  RecordCiphertext
} from "@provablehq/sdk"


export function getMerkleProof(merkleProof: MerkleProofLeo): MerkleProof {
  const result: MerkleProof = {
    siblings: leo2js.array(merkleProof.siblings, leo2js.field),
    leaf_index: leo2js.u32(merkleProof.leaf_index),
  }
  return result;
}