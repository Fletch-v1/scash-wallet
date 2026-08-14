// Minimal wallet core: seed generation and derivation (BIP39/BIP32)

import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';

// TODO: Replace with scash network params
const SCASH_NETWORK: bitcoin.Network = bitcoin.networks.bitcoin;

export function generateSeed(strength = 128): string {
  return bip39.generateMnemonic(strength);
}

export function seedToRoot(seed: string, passphrase = ''): bip32.BIP32Interface {
  const seedBuf = bip39.mnemonicToSeedSync(seed, passphrase);
  return bip32.fromSeed(seedBuf, SCASH_NETWORK);
}

export function deriveFirstExternalAddress(root: bip32.BIP32Interface, account = 0, change = 0, index = 0): string {
  // default to BIP44 path: m/44'/0'/account'/change/index
  const path = `m/44'/0'/${account}'/${change}/${index}`;
  const child = root.derivePath(path);
  const { address } = bitcoin.payments.p2pkh({ pubkey: child.publicKey, network: SCASH_NETWORK });
  if (!address) throw new Error('Failed to derive address');
  return address;
}

export default {
  generateSeed,
  seedToRoot,
  deriveFirstExternalAddress,
};
