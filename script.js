let phrases = [
{ text: 'поиграть в фоллаут', image: 'https://overclockers.ru/st/legacy/blog/378513/169853_O.png' },
{ text: 'а подумать как купить схему на броню секретной службы в фоллаут', image: 'https://fallout76.su/images/bronya/bronya_sekretnoy_sluzhby_fallout_resizebyheight_cropcenter_500_250.jpg' },
{ text: 'разобраться, как самому делать билды', image: 'https://steamuserimages-a.akamaihd.net/ugc/1745687931296383926/0BBF60386BCC3B88F2E959E7DF8C71B9DE12660D/' },
{ text: 'а посмотреть стресс бороду', image: 'https://i.ytimg.com/vi/Myz4wY2Hqh4/maxresdefault.jpg' },
{ text: 'поставить пупсов на полку', image: 'https://cdn.shazoo.ru/134367_4RuFzBElP5_bobbleheads.jpg' },
{ text: 'посмотреть цену на fallout 1st', image: 'https://gamebomb.ru/files/galleries/001/d/dd/329875.jpg' },
{ text: 'посмотреть трейлер обновления и ужаснуться в комментариях', image: 'https://www.global-esports.news/wp-content/uploads/2022/02/The-events.jpg' },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
