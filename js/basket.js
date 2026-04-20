document.addEventListener('DOMContentLoaded', function() {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const basketEl = document.getElementById('basket');
  const basketItemsEl = document.getElementById('basket-items');
  const totalEl = document.getElementById('total');
  const submitBtn = document.getElementById('submit-order');

  function updateBasket() {
    basketItemsEl.innerHTML = '';
    let total = 0;
    basket.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.title} x${item.quantity} - ${item.price} <button class="remove" data-index="${index}">Remove</button>`;
      basketItemsEl.appendChild(li);
      // Parse price, assume £X.XX
      const priceNum = parseFloat(item.price.replace('£', ''));
      total += priceNum * item.quantity;
    });
    totalEl.textContent = `£${total.toFixed(2)}`;
    localStorage.setItem('basket', JSON.stringify(basket));
    basketEl.style.display = basket.length > 0 ? 'block' : 'none';
  }

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-basket')) {
      const title = e.target.dataset.title;
      const price = e.target.dataset.price;
      const image = e.target.dataset.image;
      const existing = basket.find(item => item.title === title);
      if (existing) {
        existing.quantity++;
      } else {
        basket.push({ title, price, image, quantity: 1 });
      }
      updateBasket();
    } else if (e.target.classList.contains('remove')) {
      const index = e.target.dataset.index;
      basket.splice(index, 1);
      updateBasket();
    }
  });

  submitBtn.addEventListener('click', function() {
    if (basket.length === 0) return alert('Basket is empty');
    fetch(window.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: basket })
    })
    .then(response => {
      if (response.ok) {
        alert('Order submitted!');
        basket.length = 0;
        updateBasket();
      } else {
        alert('Error submitting order');
      }
    })
    .catch(err => alert('Error: ' + err.message));
  });

  updateBasket();
});