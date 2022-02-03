import './projects.css'
import { FaCode } from "react-icons/fa"
import { projects} from "./projectsData"
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
  

  return ( 
    <div className='card-bodyi'>
      
              {projects.map((item) => (
                  <div key={uuidv4()} className='cardContainer'>
                    <div key={uuidv4()} className="cardBody">
                      <a href={item.link} target="_blank">
                     <img className='cardImg' src={item.img} alt={item.alt} />
                     </a>
                      <div className='middle-bottom'>
                        <h2 className="title">{item.title}</h2>
                        <p className='cardText'>{item.desc}</p>
                        <a href={item.gitLink} target="_blank">
                        <button
                        className='project-btn'><FaCode style={{marginRight:"5px"}}/>{item.code}
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
      
  
    </div>
     
  )
}


