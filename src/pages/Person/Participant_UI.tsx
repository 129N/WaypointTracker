
import { useNavigate } from "react-router-dom";

 
const Participant_UI = () => {


    const navigate= useNavigate();
     return(
 
     <div className=  "p-4  bg-gray-600  text-white ">
      <h1>Here is the line</h1>
      <button className="p-2 bg-red-500 text-white m-2" onClick={() => navigate("/after-login")}>
      Back to Login
      </button>
         
         <div  className="flex flex-col gap-4 w-full max-w-md" >
         <button className="p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600" onClick={() => navigate("/competition")}>
          Participate
        </button>
        <button className="p-3 bg-green-500 text-white font-bold rounded hover:bg-green-600">
          Registration
        </button>
        <button className="p-3 bg-purple-500 text-white font-bold rounded hover:bg-purple-600">
          Check the History
        </button>
        </div>


     </div>
     );
 
};

export default Participant_UI;