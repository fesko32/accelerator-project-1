const tabBtn = document.querySelectorAll('.price__subscriptions-tab');
const tabsElements = document.querySelectorAll('.price__subscriptions-cards');
const accordionButton = document.querySelectorAll('.faq__accordion-button');
const tabFaq = document.querySelectorAll('.faq__tablink');
const contentsList = document.querySelectorAll('.faq__content-list');

tabBtn.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabBtn.forEach((btn) => {
      btn.classList.remove('price__subscriptions-tab--current');
      btn.classList.remove('is-active');
    });

    tab.classList.add('price__subscriptions-tab--current');
    tab.classList.add('is-active');

    tabsElements.forEach((element) => {
      element.classList.remove('is-active');
    });
    tabsElements[index].classList.add('is-active');
  });
});


accordionButton.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('faq__accordion-button--active');

    const content = document.querySelectorAll('.faq__content-item')[index];
    content.classList.toggle('faq__content-item--active');
  });
});


tabFaq.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabFaq.forEach((btn) => {
      btn.classList.remove('faq__tablink--current');
    });

    tab.classList.add('faq__tablink--current');

    contentsList.forEach((element) => {
      element.classList.remove('faq__content-list--active');
    });
    contentsList[index].classList.add('faq__content-list--active');
  });
});
