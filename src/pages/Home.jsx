
import Sidebar from "../components/Sidebar";
import vector from "../assets/Vector.png"
import arrow from "../assets/Arrow.png"
import Cards from "../components/Cards";
import '../components/style.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bgss ml-4 mr-4 flex-container">
        <div className="content">
        <div className="background"></div>
       <div className="date">
       <img src={vector} alt="" />
       <p className="typo">21 MARCH 2024</p>
       <img src={arrow} alt="" />
       <p className="typo">21 APRIL 2024</p>
       </div>
       <p className="typos">
       Bahamas Family Trip
       </p>
       <p className="typoss">
       New York,United States of America solo Trip
       </p>

       <div className="main-card">
       <Cards
       paragraphText="Activities"
       paragraphsText="Build, personalize, and optimize your itineraries with our trip planner."
        buttonText="Add activities" 
        buttonBackgroundColor="#007bff" 
        buttonTextColor="#fff" 
        backgroundColor="#000031" 
        paragraphTextColor="white"
        linkTo="/activities"
      />
       <Cards
       paragraphText="Hotels"
       paragraphsText="Build, personalize, and optimize your itineraries with our trip planner."
        buttonText="Add hotel" 
        buttonBackgroundColor="#007bff" 
        buttonTextColor="#fff" 
        backgroundColor="white" 
        paragraphTextColor="#1D2433"
        linkTo="/hotel" 
      />
       <Cards
       paragraphText="Flights"
       paragraphsText="Build, personalize, and optimize your itineraries with our trip planner."
        buttonText="Add flights" 
        buttonBackgroundColor="white" 
        buttonTextColor="#0D6EFD" 
        backgroundColor="#0D6EFD" 
        paragraphTextColor="white"
        linkTo="/flight" 
      />
       </div>
       <div className="trip">
        <p className="texts">
        Trip itineraries
        </p>
        <p className="textss">
        Your trip itineraries are placed here
        </p>
       </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#F0F2F5', marginTop:'30px'}} className="flexs flex-container">
          <p className="flight">
          Flights
          </p>
          <Link to="/flight">
        <button>Add flight</button>
      </Link>
         
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#344054', marginTop:'30px'}} className="flexs flex-container">
          <p className="hotel">
          Hotel
          </p>
          <Link to="/hotel">
        <button>Add hotel</button>
      </Link>
         
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#0054E4', marginTop:'30px'}} className="flexs flex-container">
          <p className="active">
          Activities
          </p>
          <Link to="/activities">
        <button>Add activities</button>
      </Link>
         
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
