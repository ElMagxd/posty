import Nav from "./auth/nav";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto",
});

export const metadata = {
	title: "Posty",
	description: "Just make a post ;)",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`mx-4 mdLmx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}
			>
				{/* TODO: remove ts-ignore when it's fixed */}
				{/* @ts-ignore */}
				<Nav />
				{children}
			</body>
		</html>
	);
}
