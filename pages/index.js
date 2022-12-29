import styles from "../styles/Home.module.css";
import Hero from "./Hero";

export default function Home() {
	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[11vw]">
			<Hero />
		</div>
	);
}
