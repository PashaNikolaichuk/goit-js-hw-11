const API_KEY = '46831416-189b424aaa4e35cb9d06aecea';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchData(search = '') {
  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
