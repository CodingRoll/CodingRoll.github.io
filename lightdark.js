document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("dark-slider");
  const body = document.querySelector("body");
  
  slider.addEventListener("input", function() {
    const value = slider.value;
    
    // Calculate the blue color value
    const blueValue = 300 - (value * 2.55);
    const other = 255 - (value * 2.55);

    // Set the variable values for the dark theme
    document.documentElement.style.setProperty('--bg-color', `rgb(10 , 5,  ${blueValue})`);
    document.documentElement.style.setProperty('--text-color', `rgb(150, 250, ${other})`); // Set text color to black
    
    // Add or remove dark theme class based on slider value
    if (value >= -1) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  });
});
