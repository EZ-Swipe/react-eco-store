import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const IconsList = () => {
   return (
      <div className="icons-list">
         <a href="#" className="icons-list__item">
            <FaFacebookF size='1.5rem' />
         </a>
         <a href="#" className="icons-list__item">
            <FaTwitter size='1.5rem' />
         </a>
         <a href="#" className="icons-list__item">
            <FaPinterestP size='1.5rem' />
         </a>
         <a href="#" className="icons-list__item">
            <FaInstagram size='1.5rem' />
         </a>
      </div>
   );
}

export default IconsList;
