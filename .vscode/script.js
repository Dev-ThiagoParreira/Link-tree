function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*pegar a tag img, substituir a imagem*/
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    /*se tiver o light mode, adicionar a imagem*/
    img.setAttribute("src", "./Mobile/thiago light.png")
  } else {
    /* se for dark mode, manter a imagem*/
    img.setAttribute("src", "./Mobile/thiago dark.png")
  }
}
