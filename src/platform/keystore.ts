// Platform keystore and encrypted storage stubs

import { randomBytes, createCipheriv, createDecipheriv, pbkdf2Sync } from 'crypto';

const ALGO = 'aes-256-gcm';

export function encryptSeed(seed: string, password: string): { ciphertext: string; iv: string; salt: string; tag: string } {
  // NOTE: simple PBKDF2 + AES-GCM example. Replace with Argon2 + XChaCha20-Poly1305 in production.
  const salt = randomBytes(16);
  const iv = randomBytes(12);
  const key = pbkdf2Sync(password, salt, 100000, 32, 'sha256');
  const cipher = createCipheriv(ALGO, key, iv);
  const encrypted = Buffer.concat([cipher.update(seed, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    ciphertext: encrypted.toString('hex'),
    iv: iv.toString('hex'),
    salt: salt.toString('hex'),
    tag: tag.toString('hex'),
  };
}

export function decryptSeed(payload: { ciphertext: string; iv: string; salt: string; tag: string }, password: string): string {
  const salt = Buffer.from(payload.salt, 'hex');
  const iv = Buffer.from(payload.iv, 'hex');
  const tag = Buffer.from(payload.tag, 'hex');
  const key = pbkdf2Sync(password, salt, 100000, 32, 'sha256');
  const decipher = createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(Buffer.from(payload.ciphertext, 'hex')), decipher.final()]);
  return decrypted.toString('utf8');
}
