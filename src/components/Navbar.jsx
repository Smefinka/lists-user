function Navbar({onClick1}){
    function handleNavLinkClick(pageHome){
        onClick1(pageHome); 
      };
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#home" onClick={() => handleNavLinkClick('home')}>List users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#add-contact" onClick={() => handleNavLinkClick('add-contact')}>Add users</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar;