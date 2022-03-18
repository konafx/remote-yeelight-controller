let utilsNextId = Math.floor(Math.random() * 2**(4*4))

function getHtmlId(prefix?: string): string {
  const uniqueHex4 = utilsNextId.toString(16).slice(-4);
  utilsNextId++;
  return `${prefix||''}${uniqueHex4}`;
}

export {getHtmlId}
