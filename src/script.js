function vanish() {
  setInterval(loaderRemove, 3000);
  function loaderRemove() {
    loader.remove("#loader");
    document.getElementById("#main-body").style.display = "block";
  }
}

let loader = document.querySelector("#loader");
window.addEventListener("load", vanish);

function changeDescription() {
  document.getElementById("#main-body").style.display = "none";

  let descriptionsArray = [
    "and world traveller.",
    "and chocoholic.",
    "and dreamer.",
    "and animal lover.",
    "and cheesy music fan.",
  ];

  let descriptionElement = document.querySelector("#changing-desc");

  let currentValue = 0;

  setInterval(() => {
    descriptionElement.innerHTML = descriptionsArray[currentValue];
    currentValue = (currentValue + 1) % descriptionsArray.length;
  }, 3000);
}
changeDescription();

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
