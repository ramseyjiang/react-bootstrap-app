import React from "react";
import {year} from "../utils/Date.js"

const Footer = () => {
    return (
      <div className="font-small bg-dark">
        <div className="text-center text-white py-1">© {year()} Copyright:Ramsey Jiang</div>
      </div>
    );
};

export default Footer;