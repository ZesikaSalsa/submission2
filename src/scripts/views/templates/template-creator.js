import CONFIG from '../../globals/config';
     
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.name}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant_description">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
`;
 
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.title}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/<pictureId>'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;
 
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };