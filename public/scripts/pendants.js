import { logEvent } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { analytics } from "./firebase.js";

window.onload = async () => {
  // Log the analytics event
  logEvent(analytics, 'view_pendant_page', {
    page_name: 'Pendants Collection'
  });

  if (typeof window.fetchPendantItems !== "function") {
    console.error("Firebase function not available!");
    return;
  }

  let currentPage = 1;  // To track the current page
  const itemsPerPage = 20;  // Number of items to load at once
  const jewelryContainer = document.getElementById("jewelry-list");
  let allItemsFetched = false; // To track if all items are fetched

  // Function to fetch jewelry items for the current page
  const fetchItems = async () => {
    if (allItemsFetched) return; // Stop fetching if all items are fetched

    try {
      const jewelryItems = await window.fetchPendantItems(currentPage, itemsPerPage);

      if (jewelryItems.length < itemsPerPage) {
        allItemsFetched = true;  // No more items to load
      }

      jewelryItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("product");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("product-info");

        itemDiv.innerHTML = `
          <img src="${item.photo}" alt="${item.name}">
        `;

        detailsDiv.innerHTML = `
          <h3>${item.name}</h3>
          <span class="item-gram">${item.gram}g</span>
          <p>${item.price}</p>
        `;

        itemDiv.appendChild(detailsDiv);
        jewelryContainer.appendChild(itemDiv);
      });

      currentPage++; // Move to the next page
    } catch (error) {
      console.error("Error fetching jewelry items:", error);
    }
  };

  // Initial load
  await fetchItems();

  // Infinite scroll logic
  window.addEventListener("scroll", async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // User reached the bottom of the page
      await fetchItems();
    }
  });
};
