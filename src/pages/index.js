import React from "react"

const IndexPage = () => (
    <div> 
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <form 
        name="contact" 
	method="post"
	data-netlify="true"
	data-netlify-honeypot="bot-field"
      >
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
    </div>
)

export default IndexPage
