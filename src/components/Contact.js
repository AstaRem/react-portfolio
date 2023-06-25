
function Contact(){
    return(
    <>
    <form>
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
    </form>
      <p className="contacts">My Email: asta.rem777@gmail.com</p>
      <p className="contacts">You can download a PDF version of my CV <a href={process.env.PUBLIC_URL + "/CV_05_2023.pdf"} >here</a>.</p>
      <p className="contacts">Here is my <a href="https://github.com/AstaRem">GitHub</a>.</p>
      <p className="contacts">You can find me on <a href="https://www.linkedin.com/in/asta-rem-developer/">LinkedIn</a>.</p>
</>
    
    )
}

export default Contact;