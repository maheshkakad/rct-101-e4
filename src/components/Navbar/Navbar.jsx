import React from "react";

const Navbar = () => {



  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link"></a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">0</div>
        <button data-cy="navbar-login-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
