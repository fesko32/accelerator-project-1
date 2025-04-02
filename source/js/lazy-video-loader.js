const videoContainer = document.querySelector('.about__video-link');
const buttonPlay = document.querySelector('.about__button');
const aboutWrapper = document.querySelector('.about__wrapper');

const createElementIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('allowfullscreen', 'true');
  buttonPlay.remove();
  aboutWrapper.classList.add('about__wrapper--aftr-hidden');
  iframe.classList.add('about__video');
  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
};

buttonPlay.addEventListener('click', createElementIframe);
