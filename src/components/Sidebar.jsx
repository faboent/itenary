import horizon from '../assets/RoadHorizon.svg'
import building from '../assets/Buildings.svg'
import airplane from '../assets/Airplane.svg'
import student from '../assets/Student.svg'
import newspaper from '../assets/Newspaper.svg'
import suitcase from '../assets/Suitcase.svg'
import medical from '../assets/First.svg'
import packages from '../assets/Package.svg'
import './style.css'
const Sidebar = () => {
  return (
    <div className="bgs top text-white h-screen w-64 flex flex-col hidden md:flex">
      <div className="side flex-grow flex flex-col justify-between">
        <ul className="space-y-4">
          <div style={{display:'flex', flexDirection:'row'}}>
          <img src={horizon} alt="" /> 
          <li className="px-4 py-2  cursor-pointer text"> Activities</li>
          </div>
          <div  style={{display:'flex', flexDirection:'row'}}>
            <img src={building} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Hotels</li>
          </div>
          <div  style={{display:'flex', flexDirection:'row'}}>
            <img src={airplane} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Flights</li>
          </div>
          <div style={{display:'flex', flexDirection:'row'}} >
            <img src={student} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Study</li>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <img src={newspaper} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Visa</li>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <img src={suitcase} alt="" />
          <li className="px-4 py-2  cursor-pointer text">Immigration</li>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <img src={medical} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Medical</li>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <img src={packages} alt="" />
            <li className="px-4 py-2  cursor-pointer text">Vacation package</li>
          </div>
          
        </ul>
        <div className="p-4">Footer</div>
      </div>
    </div>
  );
};

export default Sidebar;
