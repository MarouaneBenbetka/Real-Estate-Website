import { useState, useEffect } from "react";
import PagesPagination from "../components/Home/PagesPagination";
import Message from "../components/Messages/Message";
import { DUMMY_MESSAGE } from "../data/data";
import { isLogin } from "../utils/services/auth";
import { getSession } from "next-auth/react";
import cookie from "js-cookie";
import axios from "axios";
import EmptyMessages from "../components/errors/EmptyMessages";
import ConnectionError from "../components/errors/ConnectionError";
import SkeltonMessage from "../components/Messages/SkeltonMessage";

const Messages = ({ session }) => {
	const [pageCount, setPageCount] = useState(1);
	const [connectionError, setConnectionError] = useState(false);
	const [messages, setMessages] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const maxPages = 1;

	const wait_function_test = async function test() {
		console.log("start timer");
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("after 1 second");
	};

	useEffect(() => {
		setIsLoading(true);

		axios
			.get(`http://127.0.0.1:5000/messages/messages`, {
				headers: {
					Authorization: `Bearer ${session.user.jwt}`,
				},
			})
			.then((res) => {
				setMessages(res.data.data);
				setConnectionError(false);
				console.log(res.data.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setConnectionError(true);
				setIsLoading(false);
			});
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
			{connectionError ? (
				<ConnectionError />
			) : (
				<div className="my-4">
					<h1 className="font-bold text-[32px] mb-4">
						Boîte de réception{" "}
					</h1>
					{isLoading ? (
						[...Array(6)].map((e, index) => (
							<SkeltonMessage key={index} />
						))
					) : messages && messages.length > 0 ? (
						messages.map((message) => (
							<Message
								infos={message}
								key={message.id}
								userJwt={session.user.jwt}
							/>
						))
					) : (
						<EmptyMessages />
					)}

					<PagesPagination
						maxPages={maxPages}
						currentPage={pageCount}
						onNextPageClick={nextPageHandler}
						onPreviousPageClick={previousPageHandler}
						onSelectionPageClick={selectPageHandler}
					/>
				</div>
			)}
		</div>
	);
};

export default Messages;

export async function getServerSideProps({ req }) {
	const session = await getSession({ req });
	if (!session) {
		return {
			redirect: {
				destination: "/?login=true",
				permanent: true,
			},
		};
	}

	return {
		props: { session },
	};
}
