//<!------------------------ packages toggle ------------------------>

const packagesButton = document.querySelectorAll(".packages-buttons button");
const packagesTableBody = document.querySelector(".packages tbody");

console.log(packagesButton);
console.log(packagesTableBody);

function removeActiveClassFromButtons() {
  packagesButton.forEach((button) => {
    button.classList.remove("active");
  });
}

packagesButton.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClassFromButtons();
    if (button.classList.contains("students")) {
      button.classList.add("active");
      packagesTableBody.innerHTML = `
            <tr>
                <td>Regular with standard license</td>
                <td>6 week</td>
                <td>1,840</td>
              </tr>
              <tr>
                <td>Regular with premium license</td>
                <td>6 week</td>
                <td>2,500</td>
              </tr>
              <tr>
                <td>Express without license</td>
                <td>3 week</td>
                <td>2,250</td>
              </tr>
              <tr>
                <td>Express with standard license</td>
                <td>3 week</td>
                <td>2,910</td>
              </tr>
              <tr>
                <td>Express with premium license</td>
                <td>3 week</td>
                <td>3,160</td>
              </tr>
              <tr>
                <td>Polishing without license</td>
                <td>2 - 4 week</td>
                <td>1,350</td>
              </tr>
              <tr>
                <td>Polishing with standard license</td>
                <td>2 - 4 week</td>
                <td>2,010</td>
              </tr>
              <tr>
                <td>Polishing with premium license</td>
                <td>2 - 4 week</td>
                <td>2,060</td>
              </tr>
            `;
    } else if (button.classList.contains("license")) {
      button.classList.add("active");
      packagesTableBody.innerHTML = `
            <tr>
                <td>Regular</td>
                <td>3 month</td>
                <td>1,650</td>
              </tr>
              <tr>
                <td>express</td>
                <td>3-4 week</td>
                <td>1,900</td>
              </tr>
            `;
    } else if (button.classList.contains("non-students")) {
      button.classList.add("active");
      packagesTableBody.innerHTML = `
            <tr>
                <td>Regular with standard license</td>
                <td>6 week</td>
                <td>1,990</td>
              </tr>
              <tr>
                <td>Regular with premium license</td>
                <td>6 week</td>
                <td>2,900</td>
              </tr>
              <tr>
                <td>Express without license</td>
                <td>3 week</td>
                <td>2,400</td>
              </tr>
              <tr>
                <td>Express with standard license</td>
                <td>3 week</td>
                <td>3,060</td>
              </tr>
              <tr>
                <td>Express with premium license</td>
                <td>3 week</td>
                <td>3,310</td>
              </tr>
              <tr>
                <td>Polishing without license</td>
                <td>2 - 4 week</td>
                <td>1,500</td>
              </tr>
              <tr>
                <td>Polishing with standard license</td>
                <td>2 - 4 week</td>
                <td>2,160</td>
              </tr>
              <tr>
                <td>Polishing with premium license</td>
                <td>2 - 4 week</td>
                <td>2,410</td>
              </tr> 

            `;
    }
  });
});

//<!------------------------ animate on scroll ------------------------>

 AOS.init();

//<!------------------------ testimonial swiper js ------------------------>

window.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
});
