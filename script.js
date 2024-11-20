// Leap Year Checker
function checkLeapYear() {
    const year = document.getElementById("year").value;
    const result = document.getElementById("leapYearResult");

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.innerHTML = `${year} is a leap year.`;
    } else {
        result.innerHTML = `${year} is not a leap year.`;
    }
}

// Ticket Pricing
function calculateTicketPrice() {
    const age = document.getElementById("age").value;
    const result = document.getElementById("ticketPriceResult");

    if (age <= 12) {
        result.innerHTML = "The ticket price is $10.";
    } else if (age <= 17) {
        result.innerHTML = "The ticket price is $15.";
    } else {
        result.innerHTML = "The ticket price is $20.";
    }
}

// Weather Clothing Adviser
function adviseClothing() {
    const temperature = document.getElementById("temperature").value;
    const raining = document.getElementById("raining").value.toLowerCase();
    const result = document.getElementById("clothingAdviceResult");

    if (raining === "yes") {
        result.innerHTML = "You should wear a raincoat and carry an umbrella.";
    } else {
        if (temperature <= 10) {
            result.innerHTML = "It's cold, wear a jacket.";
        } else if (temperature <= 20) {
            result.innerHTML = "It's mild, wear a sweater.";
        } else {
            result.innerHTML = "It's warm, wear light clothes.";
        }
    }
}

// Fibonacci Sequence (Recursive)
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function calculateFibonacci() {
    const n = document.getElementById("fibonacciInput").value;
    const result = document.getElementById("fibonacciResult");
    result.innerHTML = `The ${n}th Fibonacci number is: ${fibonacci(n)}`;
}

// Palindrome Checker (Recursive)
function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

function checkPalindrome() {
    const str = document.getElementById("palindromeInput").value;
    const result = document.getElementById("palindromeResult");
    if (isPalindrome(str)) {
        result.innerHTML = "The string is a palindrome.";
    } else {
        result.innerHTML = "The string is not a palindrome.";
    }
}
