document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const searchBtn = document.getElementById("search");
    const input = document.getElementById("input");
    const head = document.getElementById("head");
    const mealContainer = document.getElementById("meal-container");
  
    // Ensure button exists before adding event listener
    if (searchBtn) {
        searchBtn.addEventListener("click", async () => {
            console.log("Search button clicked!"); // Debugging
            await renderFood(input);
        });
    } else {
        console.error("Search button not found!");
    }
  });
  
  // Function to fetch meals and render results
  const renderFood = async (search) => {
    let searchValue = search.value.trim(); 
  
    if (!searchValue) {
        document.getElementById("head").innerHTML = "Please Enter a Dish Name!";
        return;
    }
  
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    console.log("Fetching from:", url);
  
    try {
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
  
        let jsonData = await response.json();
        console.log("API Response:", jsonData);
  
        if (!jsonData.meals) {
            document.getElementById("head").innerHTML = "No Dish Found. Please Try Again!";
            return;
        }
  
        document.getElementById("head").innerHTML = "Best Dishes Ever";
  
    } catch (error) {
        console.error("Fetch Error:", error.message);
        document.getElementById("head").innerHTML = "Error fetching data. Please check your internet connection.";
    }
  };
  
  
  