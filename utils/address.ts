export const formatAddress = (address: string) => (address ? `${address.slice(0, 6)}…${address.slice(38, 42)}` : '');
