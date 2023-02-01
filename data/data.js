import { MdOutlineSell, MdOutlineDateRange } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

// images for the cards
export const images = [
	"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

//dictionary to rename annouces type :
export const announcesRenameType = {
	vente: "vente",
	vacance: "vacance",
	echange: "echange",
	location: "location",
	"Location vacances": "vacance",
	terrain: "location",
	partage: "echange",
	"bureaux & commerces": "location",
};

//detection of the payment type based on the announce type
export const typeImmobilierTOtypeAnnonce = {
	vente: "",
	location: "mois",
	vacance: "jour",
	echange: "",
};

// for each type of annouce associate an icon
export const annoucesIcon = {
	location: <MdOutlineDateRange color="#7065F0" size={16} />,
	vacance: <FaUmbrellaBeach color="#7065F0" size={16} />,
	vente: <MdOutlineSell color="#7065F0" size={16} />,
	echange: <TbExchange color="#7065F0" size={16} />,
};

//annouces template :
export const DUMMY_ANNOUNCES = [
	{
		id: 0,
		typeImmoblier: "Appartement",
		typeAnnonce: "Vente",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle maison qui se bala bala ",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 1,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 2,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 3,
		typeImmoblier: "Appartement",
		typeAnnonce: "Vacance",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 4,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 5,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 6,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 7,
		typeImmoblier: "Appartement",
		typeAnnonce: "Echange",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 8,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 9,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 10,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
	{
		id: 11,
		typeImmoblier: "Appartement",
		typeAnnonce: "Location",
		wilaya: "Alger",
		commune: "Baba Hassen",
		description: "une belle aparaewlkfjasdlk adkslfjalk askldf alkdjf",
		prix: 10000,
		typePayment: "jour",
		datePublication: "01-01-2023",
		images: images,
	},
];

export const DUMMY_MESSAGE = [
	{
		id: 0,
		name: "Cristiano Ronaldo dos Santos Aveiro",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: false,
	},
	{
		id: 1,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: true,
	},
	{
		id: 2,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: true,
	},
	{
		id: 3,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: false,
	},
	{
		id: 4,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: false,
	},
	{
		id: 5,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: true,
	},
	{
		id: 6,
		name: "Benbetka Marouane",
		photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU",
		message:
			"Salam rani 7ab nchri 3likom hd l'appartement est ce c'est toujours disponible Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi in corrupti aut explicabo cumque ex excepturi doloribus mollitia magni. Impedit nemo aspernatur harum non dolores rem numquam officiis quo!",
		date: "01/01/2023",
		vue: true,
	},
];

export const footerLinks = [
	{
		title: "Useful Links",
		links: [
			{
				name: "Content",
				link: "https://www.hoobank.com/content/",
			},
			{
				name: "How it Works",
				link: "https://www.hoobank.com/how-it-works/",
			},
			{
				name: "Create",
				link: "https://www.hoobank.com/create/",
			},
			{
				name: "Explore",
				link: "https://www.hoobank.com/explore/",
			},
			{
				name: "Terms & Services",
				link: "https://www.hoobank.com/terms-and-services/",
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				name: "Help Center",
				link: "https://www.hoobank.com/help-center/",
			},
			{
				name: "Partners",
				link: "https://www.hoobank.com/partners/",
			},
			{
				name: "Suggestions",
				link: "https://www.hoobank.com/suggestions/",
			},
			{
				name: "Blog",
				link: "https://www.hoobank.com/blog/",
			},
			{
				name: "Newsletters",
				link: "https://www.hoobank.com/newsletters/",
			},
		],
	},
	{
		title: "Partner",
		links: [
			{
				name: "Our Partner",
				link: "https://www.hoobank.com/our-partner/",
			},
			{
				name: "Become a Partner",
				link: "https://www.hoobank.com/become-a-partner/",
			},
		],
	},
];

export const socialMedia = [
	{
		id: "social-media-1",
		icon: <BsInstagram size={24} color="#7065F0" />,
		link: "https://www.instagram.com/",
	},
	{
		id: "social-media-2",
		icon: <BsFacebook size={24} color="#7065F0" />,
		link: "https://www.facebook.com/",
	},
	{
		id: "social-media-3",
		icon: <BsTwitter size={24} color="#7065F0" />,
		link: "https://www.twitter.com/",
	},
	{
		id: "social-media-4",
		icon: <BsLinkedin size={24} color="#7065F0" />,
		link: "https://www.linkedin.com/",
	},
];

export const DUMMY_USERS = [
	{
		id: 1,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 2,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 3,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 4,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 5,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 6,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
	{
		id: 7,
		name: "marouane benbetka",
		photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		mail: "km_benbetka@esi.dz",
		phone: "0754329212",
		adress: "city 18 feverier,baba hassen",
		nbAnnonces: 12,
	},
];
