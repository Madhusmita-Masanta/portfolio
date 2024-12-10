import React, { useEffect } from "react";
import { Award, Folder, Users } from "react-feather";
import aboutme from "../assets/giphy.webp";

const AboutMe = ({ refs }) => {
	return (
		<div
			id="aboutme"
			className="flex flex-col xl:flex-row items-center justify-around  py-5 px-5 bg-gray-100"
			
		>
			<div className="xl:w-[35%] flex flex-col gap-5">
				<h1 className="text-[#101229] text-4xl	xl:text-7xl font-medium text-center mb-10">
					About Me
				</h1>
				
				<div className="flex flex-col gap-5 justify-center">
					<p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
						
						<em className="text-[#f77f00] font-medium">
                        I’m a passionate frontend developer and a programmer by profession.
						</em>
						I hold a Bachelor's Degree in Electronics and Communication Engineering (ECE) and have worked on several projects using frameworks like React, Bootstrap, and Tailwind CSS
					    which includes Web Development, Graphics Designing as well. I enjoy designing responsive, user-centric websites and believe in delivering qualitative work that adds value. I'm confident that my skills will support your brand or business in achieving success.
					</p>
                    <p className="text-primaryTxt font-normal leading-7 tracking-wide text-[.9rem]">
                    Feel Free To Get In Touch
					</p>
					
					<a
						href="#contact"
						className="text-primaryTxt border-2 border-black w-fit px-2 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
					>
						Hire Me
					</a>
					<br></br>
					<br></br>
				</div>
			</div>
			<div className="xl:w-[400px]">
				<img  src='https://media.tenor.com/IF2JdxzmyN4AAAAi/coding-girl.gif' alt="About Madhu" />
			</div>
		</div>
	);
};

export default AboutMe;