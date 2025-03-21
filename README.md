```markdown
# 💰 Currency Converter

A simple web-based currency converter application that fetches real-time exchange rates using an API and provides an intuitive UI for converting currencies. 🌎💱

## 🚀 Features
- 🔄 Convert between multiple currencies
- 📊 Real-time exchange rates fetched from a reliable API
- 🔄 Fallback mechanism to use an alternative API in case of failure
- 🇺🇸🇮🇳 Country flags displayed for selected currencies
- 📱 Responsive design for seamless user experience

## 🛠 Technologies Used
- 🏗 **HTML**: Structure of the webpage
- 🎨 **CSS**: Styling and layout
- ⚡ **JavaScript**: Fetching exchange rates and handling UI interactions
- 🔤 **Font Awesome**: Icons for better user experience

## 📌 Setup Instructions
1. Clone the repository or download the source files.
   ```sh
   git clone https://github.com/https://github.com/DimpleCh8686/currency-convertor.git
   ```
2. Open the `index.html` file in a web browser.
3. Ensure you have an active internet connection to fetch exchange rates.

## 📂 File Structure
```
/currency-converter
│── index.html        # Main HTML file
│── style.css         # Stylesheet for UI design
│── app.js            # JavaScript file handling UI logic
│── codes.js          # JavaScript file handling exchange rate fetching
```

## 🔍 How It Works
1. The user enters an amount to convert. 🔢
2. Selects the currency to convert from and to. 🔄
3. Clicks on the "Get Exchange Rate" button. 🎯
4. The app fetches the exchange rate and displays the converted value. 💵

## 🔗 API Integration
The application uses the following APIs:
- 🌍 **Primary API**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`
- 🌍 **Fallback API**: `https://latest.currency-api.pages.dev/v1/currencies`


## 🔮 Future Improvements
- 🔄 Add more currency APIs for better reliability.
- 📈 Implement historical exchange rate tracking.
- ✨ Improve UI with animations and transitions.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).