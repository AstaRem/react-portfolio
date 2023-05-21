
function Navbar(){
    return (
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>    );
}
  
  
export default Navbar;