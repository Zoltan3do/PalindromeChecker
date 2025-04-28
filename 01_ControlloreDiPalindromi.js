/*

Restituisce true se la stringa data è un palindromo. Altrimenti, restituisce false.

Un palindromo è una parola o una frase che è scritta allo stesso modo sia in avanti che all'indietro, ignorando punteggiatura, maiuscole e minuscole e spaziatura.

Nota: Dovrai rimuovere tutti i caratteri non alfanumerici (punteggiatura, spazi e simboli) e trasformare tutto in maiuscolo o in minuscolo per verificare la presenza di palindromi.

Passeremo stringhe con diversi formati, come racecar, RaceCar e race CAR tra le altre.

Passeremo anche stringhe con simboli speciali, come 2A3*3a2, 2A3 3a2e 2_A3*3#A2.

 */

function palindrome(str) {

    let lowered = str.toLowerCase();
    let trimmed = "";
    let demmirt ="";

    //creo una stringa con solo i valori alfanumerici contenuti in lowered
    for(let char of lowered){
        if(/[a-z0-9]/.test(char))
            trimmed += char;
    }

    //creo una stringa con solo i valori alfanumerici contenuti in lowered al contrario
    for(let i = lowered.length - 1; i >= 0; i--){
        if(/[a-z0-9]/.test(lowered[i]))
            demmirt += lowered[i];
    }

    //paragono la parola normale a quella reverse
    if(trimmed === demmirt)
        return true;
    else
        return false;
    
}

console.log(palindrome("eye"));// Controllore di Palindromi
