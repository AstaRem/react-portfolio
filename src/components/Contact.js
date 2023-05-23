// import Navbar from './Navbar';

function Contact(){
    return(
    <form>
        {/* <h2 name="contact">Here will be the form to contact me</h2> */}
        <form>
  <div  name="contact" className="form-group">
    <label class="form-input" for="exampleFormControlInput1">Your Email address:</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label class="form-input" for="exampleFormControlTextarea1">Your message:</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{/* Must include contact information:

Email address

Link to a PDF version of your CV

Link to your GitHub profile

Link to your LinkedIn page

Must have a contact form for handling events */}

<p className="contacts">My Email: asta.rem777@gmail.com</p>
<p className="contacts">You can download a PDF version of my CV <a href="#">here</a>.</p>
<p className="contacts">Here is my <a href="#">GitHub</a>.</p>
<p className="contacts">You can find me on <a href="#">LinkedIn</a>.</p>

    </form>
    )
}

export default Contact;