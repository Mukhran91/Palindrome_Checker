const palindromeValue = document.querySelector("#palindrome");
const result = document.querySelector("#result");

palindromeValue.addEventListener("input", (e) => {
    let word = e.target.value;
    result.innerHTML = word
        ? palindrome(word)
            ? `<span class="green">${word}</span> is palindrome`
            : `<span class="red">${word}</span>  is not palindrome`
        : "";
});
const palindrome = str => {
    const string = str.toLowerCase().replace(/\W|_/g, '');
    const check = string.split('').reverse().join('');
    return string === check;
};


