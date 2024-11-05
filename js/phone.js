// console.log('js connected')

const loadData = async (search,isShowAll) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones,isShowAll);
};

const displayPhones = (phone,isShowAll) => {
  console.log(phone);
  const phoneContainer = document.getElementById("div-conatiner");
  phoneContainer.textContent = "";
  const showAll = document.getElementById("show-all");
  if (phone.length > 12 && !isShowAll) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  

 if(!isShowAll){
  phone = phone.slice(0, 12);
 }

  phone.forEach((phone) => {
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
     <div class="card-actions justify-center">
     <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
     </div>
  </div>`;
    phoneContainer.appendChild(phoneCard);
  });
  loadingSpinner(false)
};

const searchButton = (isShowAll) => {
  //    console.log('clicked')
  loadingSpinner(true)
  const search = document.getElementById("search");
  const searchText = search.value;
  loadData(searchText,isShowAll);
};


const handleShowDetails = async(id)=>{
  console.log('clicked')
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data =await res.json();
  console.log(data)
  

}

// loading spinner
const loadingSpinner = (isLoading) => {
  const toggleSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    toggleSpinner.classList.remove("hidden");
  }else{
    toggleSpinner.classList.add('hidden')
  }
};

const handleShowAllBtn = ()=>{
  searchButton(true);


}
