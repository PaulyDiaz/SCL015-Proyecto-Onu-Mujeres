export const navBar = () => {
  const divNavBar = document.createElement("div");
    const viewNavBar = `
      <footer>
          <a href="#/channels">Canales</a>
          <a href="#/community">Comunidad</a>
          <a href="#/inbox">Mensajes</a>
        </footer>  
      `;
    divNavBar.innerHTML = viewNavBar;
    return divNavBar;
};
