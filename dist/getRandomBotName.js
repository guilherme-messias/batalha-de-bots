export default function getRandomString(str1, str2) {
    return Math.random() < 0.5 ? str1 : str2;
}
