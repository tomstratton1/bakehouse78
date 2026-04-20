document.addEventListener('DOMContentLoaded', function () {
  const order = {};
  const totalEl = document.getElementById('order-total');
  const submitButton = document.getElementById('submit-order');
  const nameInput = document.getElementById('customer-name');
  const emailInput = document.getElementById('customer-email');

  function parsePrice(price) {
    const parsed = parseFloat(price.replace('£', '').replace(/[^0-9.]/g, ''));
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  function updateTotal() {
    let total = 0;
    Object.values(order).forEach(item => {
      total += item.price * item.qty;
    });
    totalEl.textContent = `£${total.toFixed(2)}`;
  }

  function updateQuantity(textSpan, title, qty) {
    textSpan.textContent = qty;
    if (qty <= 0) {
      delete order[title];
    } else {
      order[title] = { ...order[title], qty };
    }
    updateTotal();
  }

  document.querySelectorAll('.qty-btn').forEach(button => {
    const title = button.dataset.title;
    const row = button.closest('tr');
    const qtySpan = row.querySelector('.qty-value');
    const priceText = row.querySelector('.price').textContent;
    const price = parsePrice(priceText);

    if (!order[title]) {
      order[title] = { title, price, qty: 0 };
    }

    button.addEventListener('click', function () {
      const delta = button.classList.contains('increase') ? 1 : -1;
      const currentQty = Number(qtySpan.textContent) || 0;
      const nextQty = Math.max(0, currentQty + delta);
      updateQuantity(qtySpan, title, nextQty);
    });
  });

  submitButton.addEventListener('click', function () {
    const items = Object.values(order).filter(item => item.qty > 0);
    if (items.length === 0) {
      alert('Please select at least one item.');
      return;
    }

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      items,
      total: totalEl.textContent,
    };

    if (!window.API_URL) {
      alert('No API endpoint is configured yet. Your order is ready to submit.');
      return;
    }

    fetch(window.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          alert('Order submitted successfully!');
          Object.keys(order).forEach(key => delete order[key]);
          document.querySelectorAll('.qty-value').forEach(el => (el.textContent = '0'));
          updateTotal();
          nameInput.value = '';
          emailInput.value = '';
        } else {
          alert('There was a problem submitting your order.');
        }
      })
      .catch(err => alert('Error submitting order: ' + err.message));
  });
});