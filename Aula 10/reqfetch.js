const myImage = document.querySelector("img");

let myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then(function (response) {
    let objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });


/* Acesso em (2023) https://developer.mozilla.org/pt-BR/docs/Web/API/fetch */