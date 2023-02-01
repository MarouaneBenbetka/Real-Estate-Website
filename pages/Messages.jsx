import { useState, useEffect } from "react";
import PagesPagination from "../components/Home/PagesPagination";
import Message from "../components/Messages/Message";
import { DUMMY_MESSAGE } from "../data/data";
import { isLogin } from "../utils/services/auth";
import { getSession } from "next-auth/react";
import cookie from "js-cookie";
import axios from "axios";

const Messages = () => {
	const [messages, setMassages] = useState(DUMMY_MESSAGE);
	const [pageCount, setPageCount] = useState(1);
	const maxPages = 3;

	useEffect(async () => {
		try {
			const response = await axios
				.get(`http://192.168.145.12:5000/messages/messages`, {
					headers: {
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZWE4NjNjZS05MWFlLTExZWQtYTdiMy1mYzA4NGFkNzQ3NTMifQ.xrB-JpZamMVR0YbgxTutSGSscQGBx4YclI_9pTffJ1M`,
					},
				})
				.catch((err) => console.log(err));
			console.log(response.data.data);
			setMassages(response.data.data);
		} catch {
			console.log("hi");
		}
	}, []);

	// pages navigation handlers :

	const nextPageHandler = (e) => {
		e.preventDefault();
		if (pageCount < maxPages)
			setPageCount((prevPageCount) => prevPageCount + 1);
	};
	const previousPageHandler = (e) => {
		e.preventDefault();
		if (pageCount > 1) setPageCount((prevPageCount) => prevPageCount - 1);
	};
	const selectPageHandler = (e, num) => {
		e.preventDefault();
		setPageCount(num);
	};

	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[11vw]">
			<div className="my-4">
				<h1 className="font-bold text-[32px] mb-4">
					Boîte de réception{" "}
				</h1>

				{messages.map((message) => (
					<Message infos={message} key={message.id} />
				))}
				<PagesPagination
					maxPages={maxPages}
					currentPage={pageCount}
					onNextPageClick={nextPageHandler}
					onPreviousPageClick={previousPageHandler}
					onSelectionPageClick={selectPageHandler}
				/>
			</div>
		</div>
	);
};

export default Messages;

// export async function getServerSideProps({ req }) {
// 	const session = await getSession({ req });
// 	// if (!session) {
// 	// 	return {
// 	// 		redirect: {
// 	// 			destination: "/?login=true",
// 	// 			permanent: true,
// 	// 		},
// 	// 	};
// 	// }

// 	return {
// 		props: { session },
// 	};
// }
