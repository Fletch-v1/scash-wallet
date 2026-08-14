# Security notes

This project is a starter scaffold only. Security-sensitive functionality is stubbed out and must be reviewed and hardened before any production use.

- Replace PBKDF2 with Argon2id for password-based KDFs.
- Use XChaCha20-Poly1305 or AES-GCM with modern nonce management for encryption.
- When possible, store secrets in OS-provided keystores (Keychain, Windows DPAPI, Android KeyStore).
- Do not transmit seeds or private keys to remote servers. Sign transactions locally.
- Consider optional Tor/SOCKS support for network privacy.
