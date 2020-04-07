import tinycolor from 'tinycolor2';

const getCorrectIndex = number => {
    if (number < 0) {
        return 0;
    } else if (number > 255) {
        return 255;
    } else {
        return number;
    }
}

export default hash => {
    const [r, g, b] = hash
        .substr(0, 3)
        .split('')
        .map(char => getCorrectIndex(char.charCodeAt(0)));
    const color = tinycolor({r, g, b}).toHexString();
    const colorLightn = tinycolor({r, g, b}).lighten(30).toHexString();

    return { color, colorLightn };
}