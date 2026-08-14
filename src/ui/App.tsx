import React, { useState } from 'react';
import { generateSeed, seedToRoot, deriveFirstExternalAddress } from '../core/wallet';

export function App(): JSX.Element {
  const [seed, setSeed] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  function onCreate() {
    const s = generateSeed();
    setSeed(s);
    const root = seedToRoot(s);
    const addr = deriveFirstExternalAddress(root);
    setAddress(addr);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>scash-wallet (demo)</h1>
      <button onClick={onCreate}>Create Wallet (demo)</button>
      {seed && (
        <div>
          <h2>Seed</h2>
          <p style={{ fontFamily: 'monospace' }}>{seed}</p>
        </div>
      )}
      {address && (
        <div>
          <h2>First Address</h2>
          <p style={{ fontFamily: 'monospace' }}>{address}</p>
        </div>
      )}
    </div>
  );
}

export default App;
