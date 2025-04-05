document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("shippingModal");
    const btn = document.getElementById("openShippingModal");
    const span = document.querySelector(".close");
  
    btn.onclick = function (e) {
      e.preventDefault();
      modal.style.display = "block";
    };
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  