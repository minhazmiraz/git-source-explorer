const Navbar = ({ repoDetails }) => {
  const navbarContent = (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        {repoDetails.name}
      </a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href={"http://github.com/" + repoDetails.author}>
            {repoDetails.author}
          </a>
        </li>
      </ul>
    </nav>
  );

  return repoDetails && navbarContent;
};

export default Navbar;
