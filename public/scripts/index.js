import { logEvent } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { analytics } from "./firebase.js";


window.onload = async () => {

    logEvent(analytics, 'view_zmain_page', {
      page_name: 'Index Page'
    });

    if (typeof window.fetchZMainItems !== "function") {
      console.error("Firebase function not available!");
      return;
    }
  
    try {
      const jewelryItems = await window.fetchZMainItems();
      const jewelryContainer = document.getElementById("jewelry-list");
  
      // Clear existing items
      jewelryContainer.innerHTML = "";
  
      // Loop through items and display them
      jewelryItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("product");
        // Create inner div for details
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

      // Append details div inside item div
      itemDiv.appendChild(detailsDiv);

      // Append item to main container
      jewelryContainer.appendChild(itemDiv);
      });
  
    } catch (error) {
      console.error("Error fetching jewelry items:", error);
    }
  };