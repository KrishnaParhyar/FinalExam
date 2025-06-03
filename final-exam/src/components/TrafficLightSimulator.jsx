import { useState,useEffect } from "react"

const TrafficLightSimulator = () => {
    const [LightOn, setLightOn] = useState('red');

    useEffect(() => {  
        const time = setInterval(() => {
            setLightOn((prevLight) => {
                switch (prevLight) {
                case 'red':
                    return 'yellow';
                case 'yellow':
                    return 'green';
                case 'green':
                    return 'red';
                default:
                    return 'red';
                }
            });
        },
    3000); 

    return () => clearInterval(time); 
  }, []);

  return (
      <div className="container">
      <div className="internal-container">        
        <div className={`lights RedLight ${LightOn === 'red' ? 'active' : ''}`}></div>        
        <div className={`lights YellowLight ${LightOn === 'yellow' ? 'active' : ''}`}></div>      
        <div className={`lights GreenLight ${LightOn === 'green' ? 'active' : ''}`}></div>
      </div>
      <style>{`
        .container {
          align-items: center;
          justify-content: center;
          height:100vh;
          background-color:rgb(0, 0, 0);
          display:flex;
        }

        .internal-container {
          background-color: #333;
          border-radius: 10px;
          padding: 30px;
          display: flex;
          gap: 20px;
          flex-direction: column;       
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        .lights {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #555;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);          
          transition: background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; 
        }
        .lights.RedLight.active {
          background-color: #ff0000;
          box-shadow: 0 0 30px #ff0000, 0 0 60px #ff0000, inset 0 0 15px rgba(255, 0, 0, 0.8);
        }

        .lights.YellowLight.active {
          background-color: #ffff00;
          box-shadow: 0 0 30px #ffff00, 0 0 60px #ffff00, inset 0 0 15px rgba(255, 255, 0, 0.8);
        }

        .lights.GreenLight.active {
          background-color: #00ff00;
          box-shadow: 0 0 30px #00ff00, 0 0 60px #00ff00, inset 0 0 15px rgba(0, 255, 0, 0.8);
        }
      `}</style>
    </div>
  )
}

export default TrafficLightSimulator
