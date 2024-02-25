import React from 'react'
import './Cont.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignsPost, faPaperPlane, faPhone, faEarth, } from '@fortawesome/free-solid-svg-icons'
import{ faLinkedinIn, 	faGithub, faWhatsapp, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
function Cont(){
  return (
    <div className="cont0">
	<div className="cont11">
	</div>
	<div className="cont1">
	  Contact Me
	</div>
	<div className="cont22">
	Below are the details to reach out to Me!
	</div>
	<div className="cont2">
	  <div className="dt">
		<div className="dt11">
		<FontAwesomeIcon icon={faSignsPost} style={{color: "#ff9500",}} />
		</div>
		 Guntur
	  </div>
	  <div className="dt1">
		<div className="dt11">
			<FontAwesomeIcon icon={faPhone} style={{color: "#ff9500",}} />
			</div>
			+91 95819 12835
      </div>
	  <div className="dt2">
	  <div className="dt11">
			<FontAwesomeIcon icon={faPaperPlane} style={{color: "#ff9500",}} />
			</div>
			harisaiparasa@gmail.com
	  </div>
	   <div className="dt3">
		<div className="dt11">
	   <FontAwesomeIcon icon={faEarth} style={{color: "#ff9500",}} />
	   </div>
		 <a href="https://www.canva.com/design/DAF5foCas_c/HvuS7R5LdrdxCXK7EaZUNw/view?utm_content=DAF5foCas_c&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer" className="dtbtt">Download Resume</a>
       </div>
  </div>

	<div className="dt124">
		Have any Questions go through this form ´◡`	
    <div className="dtf">
      <a href="https://forms.gle/9RPDLFPttyVF9M518" target="_blank" rel="noopener noreferrer">
       <button className="dtbt">Click Here</button></a>         
    </div>
	</div>
	
	<div className="cont3">
			<div className="dtgf22">
		<div className="dtsht">
		      <p> Find on Me </p>
			<a href="https://www.linkedin.com/in/parasa-hari-sai" target="_blank" rel="noopener noreferrer">
	        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ff9500",}} />	
			</a>

			<a href="https://github.com/harisaigithub" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faGithub} style={{color: "#ff9500",}} />
			</a>  

			<a href="https://wa.me/+919581912835" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faWhatsapp} style={{color: "#ff9500",}} />
			</a>

			<a href="https://twitter.com/P_HARISAI_9" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faTwitter} style={{color: "#ff9500",}} />
			</a>

			<a href="https://www.instagram.com/_mr_.immortal_9/" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faInstagram} style={{color: "#ff9500",}} />
			</a>
			</div>
			<div className="footer">
				This template is made with ❤️ by Hari Sai
				 *Rate my Website through the form above (✿◕‿◕✿)
				</div>
		</div>
	</div>
	</div>
  )
}
export default Cont;