import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';
const MobileNavbar = () => {
   const [open, setOpen] = useState(true)
   return (
      <div onClick={()=> setOpen(!open)}>
         {
            open? <FaBarsStaggered />:<RxCross2 />
         }
      </div>
   );
};

export default MobileNavbar;