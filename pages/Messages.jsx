import Message from "../components/Messages/Message";
import { messages } from "../data/data";
const Messages = () => {
	return (
		<div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[11vw]">
			<div className="my-4">
				<h1 className="font-bold text-[32px] mb-4">
					Boîte de réception{" "}
				</h1>

				{messages.map((message) => (
					<Message infos={message} key={message.id} />
				))}
			</div>
		</div>
	);
};

export default Messages;
