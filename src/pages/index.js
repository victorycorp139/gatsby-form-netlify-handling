import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <form 
	name="contact" 
	method="post"
	data-netlify="true"
	data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Your Name" type="text" />
      <button>Send</button>
    </form>
)

export default IndexPage
