import * as crypto from 'crypto'

try {
  crypto.createHash('md4')
} catch (e) {
  console.warn(
    'Crypto "md4" is not supported anymore by this Node version',
    '\n',
    'Replacing "md4" with "md5"'
  )

  const origCreateHash = crypto.createHash
  const fakeCreateHash = (alg: any, opts: any) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts)
  }

  // @ts-ignore
  crypto.createHash = fakeCreateHash
}
