function changeDescription() {
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
