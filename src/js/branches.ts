import { branches, TBranch } from "../shared/mock-data";

const branchesList = document.querySelector('.branches__list');

const getPhonesStroke = ({phone}: TBranch) => {
 return phone.map((item) =>
 `
 <span>${item}</span>
 `
  ).join('');
}

const getFaxStroke = ({fax}: TBranch) => {
  if (fax.length === 0) {
    return ` `
  }
  if (fax.length > 0) {
    const stroke = fax.map((item) => `<span>${item}</span>`).join('');
    return `<p class="branches__card-fax">Факс:${stroke}</p>`
    }

}

const stroke = branches.map((item) => (
  `
  <article class="branches__card" data-size=${item.card}>
    <h3 class="branches__card-title">${item.title}</h3>
    <div class="branches__card-phones branches__card-phones--${item.card}">
      ${getPhonesStroke(item)}
    </div>
    ${getFaxStroke(item)}
    <p class="branches__card-address">${item.address}</p>
    <a class="branches__card-link" href="#">Проложить маршрут</a>
    <p class="branches__card-operating">${item.oreratingMode}</p>
  </article>
  `
)).join('')

branchesList.insertAdjacentHTML('afterbegin', stroke)




