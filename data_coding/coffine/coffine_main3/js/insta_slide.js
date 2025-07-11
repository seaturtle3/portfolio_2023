console.clear();
var leftCard = 1;
var activeCard = 0;
var rightCard = 2;
var dur = 0.75;
var tempCard;
TweenLite.defaultEase = Power3.easeInOut;
var cards = $(".card");

cards.click(getCard);

function getCard() {
  var i = $(this).index();
  console.dir('getCard' + i);
  if (i == leftCard) {
    tempCard = rightCard;
    rightCard = activeCard;
    activeCard = leftCard;
    leftCard = tempCard;
    tempCard = tempCard
  } else if (i == rightCard) {
    tempCard = leftCard;
    leftCard = activeCard;
    activeCard = rightCard;
    rightCard = tempCard;
  } else {
    return;
  }
  positionCards();
}

function positionCards() {
  var tl = new TimelineMax();
  tl.to(cards[leftCard], dur, {
    xPercent: -100,
    scale: 0.8,
    zIndex: 5
  }, 0);
  // xPercent : 위치값
  tl.to(cards[activeCard], dur, {
    xPercent: 0,
    scale: 1,
    zIndex: 10
  }, 0);
  tl.to(cards[rightCard], dur, {
    xPercent: 100,
    scale: 0.8,
    zIndex: 5
  }, 0);
}

positionCards();