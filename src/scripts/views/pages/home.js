import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Daftar Restaurant yang Tersedia</h2>
      <div id="restaurant" class="restaurant">
      </div>
    </div>
    `;
  },
 
  async afterRender() {
    const restaurant = await RestaurantDbSource.Home();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Home;