import React from "react";
import PropTypes from "prop-types";

//funciton Navbar(){} olarak da yazılabilir
const Navbar = (props) => {
  
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

//Navbar componentini kullanmak için id'si title olan ve string biçimde olan bir veri gönderilmek zorunda (isRequired)
Navbar.propTypes={
  title: PropTypes.string.isRequired
}

//Eğer title gönderilmezse yerine gelecek default title
Navbar.defaultProps={
  title: "Default Props"
}


export default Navbar;
