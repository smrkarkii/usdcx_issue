import { SealanceMerkleTree } from "@provablehq/sdk";
type Network = "mainnet" | "testnet" | "canary" | "devnet";
export interface SiblingPath {
  siblings: bigint[];
  leaf_index: number;
}

const getEmptyTree = () => {
  const sealanceMerkleTree = new SealanceMerkleTree();
  const addresses: string[] = [];
  const leaves = sealanceMerkleTree.generateLeaves(addresses);
  const tree = sealanceMerkleTree.buildTree(leaves);

  return tree;
};

/**
 * TODO: Use SDK function when available
 */
function formatMerkleProof(proof: SiblingPath[]): string {
  const formatted = proof
    .map((item) => {
      const siblings = item.siblings.map((s) => `${s}field`).join(", ");
      return `{ siblings: [${siblings}], leaf_index: ${item.leaf_index}u32 }`;
    })
    .join(", ");

  return `[${formatted}]`;
}

/**
 * Generates a merkle proof for a given address and tree
 */
function generateProof(address: string, tree: bigint[]) {
  const sealanceMerkleTree = new SealanceMerkleTree();
  const leaves = sealanceMerkleTree.getLeafIndices(tree, address);
  const leftProof = sealanceMerkleTree.getSiblingPath(tree, leaves[0], 16);
  const rightProof = sealanceMerkleTree.getSiblingPath(tree, leaves[1], 16);

  return ([leftProof, rightProof]);
}

/**
 * TODO: Use SDK function when available
 */
function convertTreeToU256(tree: string[]): bigint[] {
  return tree.map((element) => {
    try {
      // decimal string → native bigint
      return BigInt(element);
    } catch {
      throw new Error(`Invalid decimal U256 string: ${element}`);
    }
  });
}

class ComplianceTest {
  private async fetchFreezeList(
    network: Network,
    programId: string,
  ): Promise<bigint[]> {

    const url = `https://api.provable.com/v2/${network}/programs/${programId}/compliance/freeze-list`;

    console.log(`🌍 Fetching freeze list from: ${url}`);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.warn(`⚠️ Failed to fetch freeze list (Status: ${response.status}). Using empty tree.`);
        return getEmptyTree();
      }

      const data = await response.json();

      const freezeList: string[] = Array.isArray(data) ? data : [];
      console.log("api response", freezeList)
      if (freezeList.length === 0) {
        return getEmptyTree();
      }

      let tree =  convertTreeToU256(freezeList);
      console.log(tree, "tree to u256")
      return tree;
    } catch (error) {
      console.error("❌ Error fetching freeze list:", error);
      return getEmptyTree();
    }
    
  
  }

  async getComplianceProof(
    programId: string,
    address: string,
    network: Network,
  ): Promise<string> {
    // Fetch current freeze list to check if it changed
    const tree = await this.fetchFreezeList(network, programId);

    // Generate proof for current address
    let proof ;
    try {
      proof = generateProof(address, tree);
    } catch (error) {
      console.error(`Failed to generate proof for address ${address}:`, error);
      throw error;
    }

    return proof;
  }
}

export default ComplianceTest;