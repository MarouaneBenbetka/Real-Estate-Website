/* eslint-disable react-hooks/exhaustive-deps */
import { footerLinks, socialMedia } from "../../data/data";

const Footer = () => {
	return (
		<section className={` flex-col bg-white px-6 py-6 border-t mt-4`}>
			<div
				className={`flex justify-center items-start md:flex-row flex-col mb-8 `}
			>
				<div className="flex-[1.5] w-full mx-auto flex flex-row justify-between flex-wrap md:mt-0">
					{footerLinks.map((link) => (
						<div
							key={link.title}
							className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
						>
							<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-purple">
								{link.title}
							</h4>
							<ul className="list-none mt-4">
								{link.links.map((nav, index) => (
									<li
										key={nav.name}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-dark-blue hover:text-purple cursor-pointer ${
											index !== link.links.length - 1
												? "mb-4"
												: "mb-2"
										}`}
									>
										{nav.name}{" "}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex-[1] flex flex-col justify-start lg:ml-10 md:mr-10 items-start gap-8">
					<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-purple">
						Join our mailing list
					</h4>
					<div className="flex justify-center items-center flex-grow w-full">
						<input
							type="email"
							name=""
							id=""
							placeholder="your@email.com"
							className="  input rounded-r-none w-full h-12 px-4 flex text-black bg-black bg-opacity-5 font-poppins focus:border-2 focus:outline-none border-purple placeholder-purple"
						/>
						<button className="btn rounded-l-none  text-white  min-w-fit hover:text-white bg-purple border-purple ">
							Sign up
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
				<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-purple">
					Copyright Ⓒ 2023 . All Rights Reserved.
				</p>
				<div className="flex flex-row md:mt-0 mt-6">
					{socialMedia?.map((social, index) => (
						// eslint-disable-next-line @next/next/no-img-element
						<div
							key={social.id}
							className={`cursor-pointer align-top mr-4 `}
							onClick={() => {
								window.open(social.link);
								console.log(social.icon);
							}}
						>
							{social.icon}{" "}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
