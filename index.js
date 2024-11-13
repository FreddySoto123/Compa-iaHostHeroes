function tarjeta() {
  const imagen = document.createElement("img")
  imagen.src="/assets/images/avatar-jessica.jpeg"
  imagen.className = "profile-img"
  const container = document.createElement("div")
  container.className = "container"
  const profileCard = document.createElement("div")
  profileCard.className = "profile-card"
  const h2 = document.createElement("h2")
  h2.className = "profile-title"
  const text1 = document.createTextNode("Jessica Randall")
  h2.appendChild(text1)
  const h5 = document.createElement("h5")
  h5.className = "profile-subtitle"
  const text2 = document.createTextNode("Front-end developer and avid reader")
  h5.appendChild(text2)
  const socialButtons = document.createElement("div")
  profileCard.className = "social-button:hover  "
  const boton1 = document.createElement("button")
  boton1.className = "social-button"
  boton1.textContent = "GitHub"
  const boton2 = document.createElement("button")
  boton2.className = "social-button"
  boton2.textContent = "Fronten"
  const boton3 = document.createElement("button")
  boton3.className = "social-button"
  boton3.textContent = "LinkedIn"
  const boton4 = document.createElement("button")
  boton4.className = "social-button"
  boton4.textContent = "Twitter"
  const boton5 = document.createElement("button")
  boton5.className = "social-button"
  boton5.textContent = "Instagram"

  profileCard.appendChild(imagen)
  profileCard.appendChild(h2)
  profileCard.appendChild(h5)
  profileCard.appendChild(socialButtons)
  socialButtons.appendChild(boton1)
  socialButtons.appendChild(boton2)
  socialButtons.appendChild(boton3)
  socialButtons.appendChild(boton4)
  socialButtons.appendChild(boton5)
  container.appendChild(profileCard)
  

  const contenedorTarjetas = document.querySelector(".container")
  contenedorTarjetas.appendChild(container)
}


const botonAnadir = document.querySelector(".anadirTarjeta")
botonAnadir.addEventListener("click", tarjeta)
