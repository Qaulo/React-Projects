import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="NavBarContainer">
        <div className="ButtonContainer">
          <button>Startseite</button>
          <button>Preis Liste</button>
          <button>Über den Salon</button>
          <button>Anfahrt</button>
          <button>Kontakt</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
