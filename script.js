// Fetch data from the API using async/await and fetch()
async function fetchData() {
    try {
      const response = await fetch('https://api.openbrewerydb.org/breweries');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  // Display the filtered breweries based on the search input
  function displayBreweries(breweries) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    breweries.forEach(brewery => {
      const { name, brewery_type, address, website_url, phone } = brewery;
  
      // Create elements to display the brewery information
      const breweryName = document.createElement('h2');
      breweryName.textContent = name;
  
      const breweryType = document.createElement('p');
      breweryType.textContent = `Type: ${brewery_type}`;
  
      const breweryAddress = document.createElement('p');
      breweryAddress.textContent = `Address: ${address}`;
  
      const breweryWebsite = document.createElement('a');
      breweryWebsite.textContent = website_url;
      breweryWebsite.href = website_url;
  
      const breweryPhone = document.createElement('p');
      breweryPhone.textContent = `Phone: ${phone}`;
  
      // Append the elements to the results container
      resultsContainer.appendChild(breweryName);
      resultsContainer.appendChild(breweryType);
      resultsContainer.appendChild(breweryAddress);
      resultsContainer.appendChild(breweryWebsite);
      resultsContainer.appendChild(breweryPhone);
    });
  }
  
  // Event listener for the search input field
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const data = await fetchData();
  
    const filteredBreweries = data.filter(brewery =>
      brewery.name.toLowerCase().includes(searchTerm)
    );
  
    displayBreweries(filteredBreweries);
  });
  
  // Initial page load
  (async () => {
    const data = await fetchData();
    displayBreweries(data);
  })();
  