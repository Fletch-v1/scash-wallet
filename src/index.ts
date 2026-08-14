// entry demo CLI: generate a seed and derive first address

import wallet from './core/wallet';

function main() {
  console.log('scash-wallet demo');
  const seed = wallet.generateSeed();
  console.log('Mnemonic seed:');
  console.log(seed);
  const root = wallet.seedToRoot(seed);
  const addr = wallet.deriveFirstExternalAddress(root);
  console.log('Derived address (first external):', addr);
}

if (require.main === module) {
  main();
}
