import wallet from '../src/core/wallet';

test('generate seed and derive address', () => {
  const seed = wallet.generateSeed();
  expect(typeof seed).toBe('string');
  const root = wallet.seedToRoot(seed);
  const addr = wallet.deriveFirstExternalAddress(root);
  expect(typeof addr).toBe('string');
});
