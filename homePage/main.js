function showLanguageSelection() {
  // Show the language selection message
  document.getElementById('language-message').style.display = 'block';
}

function redirectToPage(language) {
  // Hide the language selection message
  document.getElementById('language-message').style.display = 'none';

  // Redirect based on the selected language
  if (language === 'arabic') {
      window.location.href = '../htmlPages/ar first.html'; // Replace with your Arabic page URL
  } else if (language === 'english') {
      window.location.href = '../htmlPages/en first.html'; // Replace with your English page URL
  }
}
