import {
  z
} from "zod";
import {
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
  leoSignatureSchema,
  LeoArray,
  LeoAddress,
  ExternalRecord,
  tx
} from "@doko-js/core";

export interface MerkleProof {
  siblings: Array < bigint > ;
  leaf_index: number;
}

export const leoMerkleProofSchema = z.object({
  siblings: z.array(leoFieldSchema).length(16),
  leaf_index: leoU32Schema,
});
export type MerkleProofLeo = z.infer < typeof leoMerkleProofSchema > ;