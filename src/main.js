import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form-send-js');
const list = document.querySelector('.list-js');
const lightbox = new SimpleLightbox('.gallery-item a'); // Ініціалізація SimpleLightbox

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.search.value.trim();

  if (!searchQuery) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query.' });
    return;
  }

  list.innerHTML = '';

  fetchData(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          position: 'topRight',
          backgroundColor: '#ff4d4f',

          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
      } else {
        list.innerHTML = createMarkup(data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Try again.',
      });
    });
}
