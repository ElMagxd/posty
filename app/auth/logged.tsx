"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export interface LoggedProps {
	image: string;
	name: string;
}

export default function Logged({ image, name }: LoggedProps) {
	return (
		<li className='flex gap-6 items-center'>
			<button
				className='bg-gray-700 text-white text-small px-6 py-2 rounded-xl'
				onClick={() => signOut()}
			>
				Sign Out
			</button>
			<Link href='/dashboard'>
				<Image
					alt={`${name}'s avatar`}
					width={36}
					height={36}
					src={image}
					className='rounded-full'
				/>
			</Link>
		</li>
	);
}
