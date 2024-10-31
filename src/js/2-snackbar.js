import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', handlSubmit);

function handlSubmit(event) {
  event.preventDefault();
  const delayValue = event.target.delay.value;
  const stateValue = event.target.state.value;
  const delay = parseInt(delayValue);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })

    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ff4d4f',
        iconColor: 'white',
        titleColor: 'white',
        messageColor: 'white',
        titleSize: '16px',
      });
    });
}
