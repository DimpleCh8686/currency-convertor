const BASE_URL_PRIMARY = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const BASE_URL_FALLBACK = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const fetchExchangeRate = async (baseUrl, fromCurrency, toCurrency) => {
    const URL = `${baseUrl}/${fromCurrency.toLowerCase()}.json`;
    
    let response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch API from ${baseUrl}`);
    }
    
    let data = await response.json();
    return data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
};

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    try {
        // Try fetching from primary source (jsdelivr)
        let rate = await fetchExchangeRate(BASE_URL_PRIMARY, fromCurr.value, toCurr.value);
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        console.warn("Primary API failed. Trying fallback API...", error);
        try {
            // If primary fails, try fetching from fallback source (Cloudflare)
            let rate = await fetchExchangeRate(BASE_URL_FALLBACK, fromCurr.value, toCurr.value);
            let finalAmount = amtVal * rate;
            msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
        } catch (fallbackError) {
            // If both fail, show error message
            msg.innerText = "Error fetching exchange rate. Please try again later.";
            console.error("Fallback API also failed:", fallbackError);
        }
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
