import { createStyles, Image, Card, Text, Group, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { TbExchange } from "react-icons/tb";
import { MdOutlineSell, MdOutlineDateRange } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";

const useStyles = createStyles((theme, _params, getRef) => ({
	price: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},

	carousel: {
		"&:hover": {
			[`& .${getRef("carouselControls")}`]: {
				opacity: 1,
			},
		},
	},

	carouselControls: {
		ref: getRef("carouselControls"),
		transition: "opacity 150ms ease",
		opacity: 0,
	},

	carouselIndicator: {
		width: 4,
		height: 4,
		transition: "width 250ms ease",

		"&[data-active]": {
			width: 16,
		},
	},
}));

// for each type of annouce associate an icon
const annoucesIcon = {
	location: <MdOutlineDateRange color="#7065F0" size={16} />,
	vacance: <FaUmbrellaBeach color="#7065F0" size={16} />,
	vente: <MdOutlineSell color="#7065F0" size={16} />,
	echange: <TbExchange color="#7065F0" size={16} />,
};

export default function AnnouceCard({
	typeImmoblier,
	typeAnnoce,
	wilaya,
	commune,
	description,
	prix,
	duree,
	images,
}) {
	const { classes } = useStyles();
	const slides = images.map((image) => (
		<Carousel.Slide key={image}>
			<Image src={image} height={220} />
		</Carousel.Slide>
	));

	return (
		<Card
			radius="md"
			withBorder
			className="max-w-xs px-4 pb-2 shadow-[0px_20px_20px_10px_#00000024] hover:scale-[1.04] transition-all duration-75 cursor-pointer"
		>
			<Card.Section>
				<Carousel
					withIndicators
					loop
					classNames={{
						root: classes.carousel,
						controls: classes.carouselControls,
						indicator: classes.carouselIndicator,
					}}
				>
					{slides}
				</Carousel>
			</Card.Section>

			<Group position="apart" mt="xs">
				<Text className="text-dark-blue font-bold text-[18px] ">
					{typeImmoblier}
				</Text>

				<Group className="flex items-center justify-end" spacing={5}>
					{annoucesIcon[typeAnnoce.toLowerCase()]}
					<Text className="text-purple font-semibold text-[16px] py-1">
						{typeAnnoce}
					</Text>
				</Group>
			</Group>

			<Text className="text-[14px] text-purple leading-[10px]">
				{commune} / {wilaya}
			</Text>

			<Text size="sm" color="dimmed" mt="sm">
				{description.length > 64
					? description.substring(0, 64) + "..."
					: description}
			</Text>

			<Group position="apart" className="mt-1">
				<div>
					<Text span className="text-purple font-bold text-[22px]">
						{prix.toLocaleString("en-US")}
						<span className="text-[16px] font-normal"> DA</span>
					</Text>
					{duree && (
						<Text span size="sm" color="dimmed">
							{" "}
							/ {duree}
						</Text>
					)}
				</div>
			</Group>
		</Card>
	);
}
