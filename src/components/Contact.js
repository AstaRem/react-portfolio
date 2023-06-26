import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function Contact(){
    return(
    <div className="main_container">
    {/* <form>
        <form>
          <div  name="contact" className="form-group">
            <label className="form-input" for="exampleFormControlInput1">Your Email address:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label className="form-input" for="exampleFormControlTextarea1">Your message:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
    </form>
    </form> */}
    <div className="contacts_container">
      <p className="contacts get_contact">Please get in touch:</p>  
      <p className="contacts">My Email:&nbsp; &nbsp; &nbsp; asta.careerpath@gmail.com</p>
      {/* <p className="contacts">You can download a PDF version of my CV <a href={process.env.PUBLIC_URL + "/CV_05_2023.pdf"} >here</a>.</p> */}
      <p className="contacts">
        Here is my &nbsp; 
        <a href="https://github.com/AstaRem" target="_blank" rel="noreferrer">GitHub</a>
        &nbsp;
        <a href="https://github.com/AstaRem" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} className="contact_icon" /></a>
      </p>
      <p className="contacts">You can find me on &nbsp; 
        <a href="https://www.linkedin.com/in/asta-rem-developer/" target="_blank" rel='noreferrer'>LinkedIn</a>
        &nbsp;
        <a href="https://www.linkedin.com/in/asta-rem-developer" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} className="contact_icon"/> </a> 
      </p>
    </div>
</div>
    
    )
}

export default Contact;