const handleSearch = async () => {
    try {
        
        const city = document.querySelector("#searchBox").value;
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://wttr.in/${city}?format=j1`)}`;
       
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("Temp:", data.current_condition[0].temp_C);
                document.querySelector("#temp").textContent = `${data.current_condition[0].temp_C} °C`;
                document.querySelector("#humidity").textContent = `${data.current_condition[0].humidity}%`;
                document.querySelector("#condition").textContent = `${data.current_condition[0].weatherDesc[0].value}`;
                document.querySelector("#city").textContent = `${city}`;
            })
            .catch((err) => console.error("Error:", err));
        
        console.log(`The weather api is called for city: ${city}`);
        // console.log(`respose: ${response}`)
    } catch (err) {
        console.log("err", err);
    }
}