import { createStyles, Image, Card, Text, Group, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
	announcesRenameType,
	typeImmobilierTOtypeAnnonce,
	annoucesIcon,
} from "../../data/data";
import Link from "next/link";

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

export default function AnnouceCard({
	id,
	typeImmoblier,
	typeAnnoce,
	wilaya,
	commune,
	description,
	prix,
	images,
}) {
	const { classes } = useStyles();
	const slides = images.length ? (
		images.map((image, index) => (
			<Carousel.Slide key={index}>
				<Image src={image} height={220} />
			</Carousel.Slide>
		))
	) : (
		<Carousel.Slide>
			<Image src={"/house-placeholder.png"} height={220} />
		</Carousel.Slide>
	);

	return (
		<Card
			radius="md"
			withBorder
			className="max-w-xs px-4 pb-2 h-[372px] hover:scale-[1.04] shadow-xl  transition-all duration-75 "
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

			<Link href={"/Annonces/" + id} className="cursor-pointer">
				<Group position="apart" mt="xs">
					<Text className="text-dark-blue font-bold text-[18px] ">
						{typeImmoblier.charAt(0).toUpperCase() +
							typeImmoblier.slice(1)}
					</Text>

					<Group
						className="flex items-center justify-end"
						spacing={5}
					>
						{
							annoucesIcon[
								announcesRenameType[typeAnnoce.toLowerCase()]
							]
						}
						<Text className="text-purple font-semibold text-[16px] py-1">
							{announcesRenameType[typeAnnoce.toLowerCase()]}
						</Text>
					</Group>
				</Group>

				<Text className="text-[14px] text-purple leading-[10px]">
					{commune} / {wilaya}
				</Text>

				<Text size="sm" color="dimmed" mt="sm" className="h-[44px]">
					{description.length > 64
						? description.substring(0, 64) + "..."
						: description}
				</Text>

				<Group position="apart" className="mt-1">
					<div>
						<Text
							span
							className="text-purple font-bold text-[22px]"
						>
							{prix.toLocaleString("en-US")}
							<span className="text-[16px] font-normal"> DA</span>
						</Text>
						{typeImmobilierTOtypeAnnonce[
							announcesRenameType[typeAnnoce.toLowerCase()]
						] && (
							<Text span size="sm" color="dimmed">
								{" "}
								/{" "}
								{
									typeImmobilierTOtypeAnnonce[
										announcesRenameType[
											typeAnnoce.toLowerCase()
										]
									]
								}
							</Text>
						)}
					</div>
				</Group>
			</Link>
		</Card>
	);
}
