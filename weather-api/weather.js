const apiKey = "b949dbfb8b804b8aa6a50720260806";


const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const weatherDiv = document.getElementById("weather");

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
        );
      
       
        const data = await response.json();

         console.log(data.city);

        weatherDiv.classList.remove("hidden");

        weatherDiv.innerHTML = `
            <div class="flex flex-col items-center">
                
                <h2 class="text-2xl font-bold text-white">
                    ${data.location.name}
                </h2>

                <p class="text-white mb-2">
                    ${data.location.country}
                </p>

                <img
                    src="https:${data.current.condition.icon}"
                    alt="Weather Icon"
                    class="w-20 h-20"
                >

                <h3 class="text-5xl font-bold text-white my-2">
                    ${data.current.temp_c}°C
                </h3>

                <p class="text-lg text-white mb-4">
                    ${data.current.condition.text}
                </p>

                <div class="grid grid-cols-2 gap-4 w-full">

                    <div class="bg-white rounded-xl p-3 shadow hover:scale-[1.1]">
                        <p class="text-gray-500">Humidity</p>
                        <p class="font-bold">${data.current.humidity}%</p>
                    </div>

                    <div class="bg-white rounded-xl p-3 shadow hover:scale-[1.1]">
                        <p class="text-gray-500">Wind</p>
                        <p class="font-bold">${data.current.wind_kph} km/h</p>
                    </div>

                    <div class="bg-white rounded-xl p-3 shadow hover:scale-[1.1]">
                        <p class="text-gray-500">Feels Like</p>
                        <p class="font-bold">${data.current.feelslike_c}°C</p>
                    </div>

                    <div class="bg-white rounded-xl p-3 shadow hover:scale-[1.1]">
                        <p class="text-gray-500">UV Index</p>
                        <p class="font-bold">${data.current.uv}</p>
                    </div>

                </div>
            </div>
        `;

    } catch (error) {
        weatherDiv.classList.remove("hidden");

        weatherDiv.innerHTML = `
            <p class="text-red-500 font-semibold">
                City not found or API error.
            </p>
        `;

        console.error(error);
    }
}

