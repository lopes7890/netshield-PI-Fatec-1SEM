function popup() {
  const form = document.querySelector(".form-card");

  const modalOverlay = document.getElementById("modalOverlay");

  const closeModal = document.getElementById("closeModal");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Abre o modal
    modalOverlay.classList.add("active");

    // Limpa o formulário
    form.reset();
  });

  // Fecha ao clicar no botão
  closeModal.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
  });

  // Fecha ao clicar fora do modal
  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

const membersData = {
  "Allison Lopes da Silva Bosco": {
    img: "img/allfoto.jpeg",
    role: "Desenvolvedor Full Stack",
    info: [
      { label: "Curso", value: "Desenvolvimento de Software Multiplataforma" },
      { label: "Período", value: "1º semestre" },
      { label: "Email", value: "allison.bosco@aluno.cps.sp.gov.br" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/lopes7890",
    linkedin: "https://www.linkedin.com/in/allison-lopes-da-silva-bosco-b1b82b269/"
  },
  "Felipe Hiroki Nukamoto Tamashiro": {
    img: "img/felipe.jpeg",
    role: "Técnico de Redes",
    info: [
      { label: "Curso", value: "Desenvolvimento de Software Multiplataforma" },
      { label: "Período", value: "1º semestre" },
      { label: "Email", value: "felipe.tamashiro@aluno.cps.sp.gov.br" },
    ],
    tags: ["Cisco", "Draw.io", "Packet Tracer"],
    github: "https://github.com/tamashiro13",
    linkedin: "https://www.linkedin.com/in/felipe-tamashiro-7b18243bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  "Lucas Ribeiro Morato": {
    img: "img/lucas.jpeg",
    role: "Designer & Dev Front-end",
    info: [
      { label: "Curso", value: "Desenvolvimento de Software Multiplataforma" },
      { label: "Período", value: "1º semestre" },
      { label: "Email", value: "lucas.morato@aluno.cps.sp.gov.br" },
    ],
    tags: ["Figma", "HTML", "CSS"],
    github: "https://github.com/Lucas-Rib-dev",
    linkedin: "https://www.linkedin.com/in/lucas-ribeiro-morato-465592399?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
};

// Adiciona clique em cada card
function membros() {
  document.querySelectorAll(".card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const name = card.querySelector("p").textContent;
      const data = membersData[name];
      if (!data) return;

      document.getElementById("popup-img").src = data.img;
      document.getElementById("popup-img").alt = name;
      document.getElementById("popup-name").textContent = name;
      document.getElementById("popup-role").textContent = data.role;
      document.getElementById("popup-info").innerHTML = data.info
        .map(
          (r) =>
            `<div class="info-row"><span class="info-label">${r.label}</span><span>${r.value}</span></div>`,
        )
        .join("");
      document.getElementById("popup-tags").innerHTML = data.tags
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");
      document.getElementById("github-link").innerHTML = `<a href="${data.github}" target="_blank">GitHub<i class="fa fa-github" style="display:flex; justify-content: center; font-size: 25px;"></i></a>`;
      document.getElementById("linkedin-link").innerHTML = `<a href="${data.linkedin}" target="_blank">LinkedIn<i class="fa fa-linkedin" style="display:flex; justify-content: center; font-size: 25px;"></i></a>`;
      document.getElementById("overlay").classList.add("active");
    });
  });

  // Fechar pop-up
  document
    .getElementById("popup-close")
    .addEventListener("click", () =>
      document.getElementById("overlay").classList.remove("active"),
    );

  document.getElementById("overlay").addEventListener("click", (e) => {
    if (e.target.id === "overlay")
      document.getElementById("overlay").classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      document.getElementById("overlay").classList.remove("active");
  });
}
