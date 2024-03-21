import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
	return (
		<footer className="py-6 mt-2  bg-slate-100 text-black">
				<div className="" style={{display: "flex"}}>
					<div>
					<span className="self-center text-2xl font-semibold" style={{marginLeft: "10%"}}>FOODIE</span> <br/> <br/>
					<p style={{marginLeft: "10%"}}>"We're here to bring deliciousness  <br/>right to your doorstep. <br/> Order now and let the feasting begin!"</p>
					</div>
					<div className="" style={{marginLeft: "20%"}}>
					<span className="self-center text-2xl font-semibold" style={{marginLeft: "0%"}}>Quick Links</span> <br/> <br/>
						<Link to="/AfterHome"><p>Home</p></Link>
						<Link to="/About"><p>About Us</p></Link>
						<p>Contact Us</p>
						<p>Services</p>
					</div>
					<div className="footer-grid-item" style={{marginLeft: "5%"}}>
					<span className="self-center text-2xl font-semibold" style={{marginLeft: "0%"}}>Have a Question ?</span> <br/> <br/>
						<p>1202&1215A, 3rd Floor, Regus</p>
						<p>SL Jubilee, Rd No:36, Jublee Hills</p>
						<p>+91-040-6793 2204</p> <br/>
						<Link to="#" className="text" style={{color: "red"}}>
						hr@anarghyacommunicationscom.in
						</Link>
					</div>

          <div className="footer-grid-item">
            <iframe
              width="200"
              height="150"
              src="https://www.google.com/maps/place/Regus+-+Hyderabad,+Jubilee+Hills/@17.4293016,78.4074517,17z/data=!3m2!4b1!5s0x3bcb9136d0d1ec57:0x2708c1c43a6e5b35!4m6!3m5!1s0x3bcb9136803f0a3d:0xfb8568429bd0eeb6!8m2!3d17.4292965!4d78.4100266!16s%2Fg%2F11bzzyfj3q?entry=ttu">
            </iframe>
          </div>
				</div>
				
				<div className=" justify-center text-center pt-4 lg:justify-between">
					<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>©2023 All rights reserved</span>
						<a rel="noopener noreferrer" href="/">
							<span>Privacy policy</span>
						</a>
						<a rel="noopener noreferrer" href="/">
							<span>Terms of service</span>
						</a>
					</div>
					{/* <div className='flex flex-row sm:items-auto justify-center text-center py-3 lg:items-auto gap-3'>
						<a target='blank' href="/"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Whatsapp</button></a>
						<a target='blank' href="https://www.linkedin.com/in/usamariazur/"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Linkedin</button></a>
						<a target='blank' href="https://github.com/usamariaz2"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Github</button></a>
						<a target='blank' href="https://github.com/usamariaz2"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Twitter</button></a>

						<a target='blank' href="https://github.com/usamariaz2"><button className='border border-[#FF6600]/80 rounded-full py-1 px-4 hover:bg-[#FF6600]/80 transition duration-300 easeinout'>Facebook</button></a>


					</div> */}

				</div>

		</footer>
	)
}
