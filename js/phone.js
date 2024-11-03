// console.log('js connected')

const loadData = async (search) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (hibijibi) => {
  console.log(hibijibi);
  const phoneContainer = document.getElementById("div-conatiner");
  phoneContainer.textContent = "";
  const showAll = document.getElementById("show-all");
  if (hibijibi.length > 12) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  hibijibi = hibijibi.slice(0, 12);

  hibijibi.forEach((phone) => {
    // console.log(phone)
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `
        <figure>
     <img
      src="${phone.image}"
      alt="Shoes" />
     </figure>
     <div class="card-body">
     <h2 class="card-title">${phone.phone_name}</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-end">
     <button class="btn btn-primary">Buy Now</button>
     </div>
  </div>`;
    phoneContainer.appendChild(phoneCard);
  });
  loadingSpinner(false)
};

const searchButton = () => {
  //    console.log('clicked')
  loadingSpinner(true)
  const search = document.getElementById("search");
  const searchText = search.value;
  loadData(searchText);
};

// loading spinner
const loadingSpinner = (isLoading) => {
  const toggleSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    toggleSpinner.classList.remove("hidden");
  }else{
    toggleSpinner.classList.add('hidden')
  }
};
