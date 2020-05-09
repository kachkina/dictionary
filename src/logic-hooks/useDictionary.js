import { useState } from 'react';

export default function useDictionary() {
    const [newWord, setNewWord] = useState('');;

    return { newWord, setNewWord };
}