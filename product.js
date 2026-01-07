const detailsContainer = document.getElementById('product-details');

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

async function getProductDetails() {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${productId}&apikey=850d1d7e`
    );

    const data = await response.json();

    if (data.Response === "False") {
      detailsContainer.innerHTML = "<p>Movie not found</p>";
      return;
    }

    detailsContainer.innerHTML = `
    <div class="details-card">
        <img src="${data.Poster}" alt="${data.Title}">
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Runtime:</strong> ${data.Runtime}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
        <a href="index.html" class="go-back">Go back</a>
    </div>
    `;

  } catch (error) {
    console.error(error);
  }
}

getProductDetails();
