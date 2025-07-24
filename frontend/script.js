function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  
  // Example of showing spinner during translation
  /*function translateText() {
    const spinner = document.getElementById('loadingSpinner');
    const output = document.getElementById('outputText');
  
    spinner.style.display = 'block';
    output.textContent = '';
  
    // Simulate async translation delay
    setTimeout(() => {
      spinner.style.display = 'none';
      output.textContent = "👉 Your translated text will appear here (dummy response)";
    }, 2000);
  }*/
  