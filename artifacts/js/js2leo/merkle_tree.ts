import {
  MerkleProof,
  MerkleProofLeo
} from "../types/merkle_tree";
import {
  js2leo
} from "@doko-js/core";


export function getMerkleProofLeo(merkleProof: MerkleProof): MerkleProofLeo {
  const result: MerkleProofLeo = {
    siblings: js2leo.array(merkleProof.siblings, js2leo.field),
    leaf_index: js2leo.u32(merkleProof.leaf_index),
  }
  return result;
}