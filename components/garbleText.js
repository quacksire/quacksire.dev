import {useEffect, useState} from "react";


export default function GarbleText(props) {
    const { text, reset } = props;

    var characters = '!@#$%^&*()_+{}|:"<>?';

    const garble = (text) => {
        const garbled = text.split('').map((char) => {
            return characters[Math.floor(Math.random() * characters.length)];
        });
        return garbled.join('');
    }






    const [letterNum, setLetterNum] = useState(0);
    const [garbledText, setGarbledText] = useState(garble(text));

    useEffect(() => {
        if (reset) {
            setLetterNum(0);
            setGarbledText(garble(text));
        }
        setTimeout(() => {
            if (letterNum === text.length) {
                return;
            }
            setLetterNum(letterNum + 1);
            setGarbledText(garbledText.substring(0, letterNum) + text[letterNum] + garble(text).substring(letterNum + 1));
        }, 100);
    }, [letterNum]);

    return garbledText;
}
