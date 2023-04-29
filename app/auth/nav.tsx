import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "./login";
import Logged from "./logged";

export default async function Nav() {
	const session = await getServerSession(authOptions);

	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href='/'>
				<h1 className='font-bold text-lg'>Posty</h1>
			</Link>
			<ul className='flex items-center gap-6'>
				{!session?.user ? (
					<Login />
				) : (
					<Logged
						image={session.user.image || ""}
						name={session.user.name || ""}
					/>
				)}
			</ul>
		</nav>
	);
}
