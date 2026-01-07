const productContainer = document.getElementById('products');

async function getProducts() {
  try {
    const [res1, res2] = await Promise.all([
      fetch('https://www.omdbapi.com/?s=batman&page=1&apikey=850d1d7e'),
      fetch('https://www.omdbapi.com/?s=batman&page=2&apikey=850d1d7e')
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();

    const products = [...data1.Search, ...data2.Search];

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${product.Poster}" alt="${product.Title}" />
        <h4>${product.Title}</h4>
        <p>${product.Year}</p>
        <p>${product.Type}</p>
      `;

      card.addEventListener('click', () => {
        window.location.href = `product.html?id=${product.imdbID}`;
      });

      productContainer.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
}

getProducts();