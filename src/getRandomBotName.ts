export default function getRandomString(str1: string, str2: string): string {
  return Math.random() < 0.5 ? str1 : str2;
}
