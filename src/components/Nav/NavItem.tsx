import Link from 'next/link';
import { ReactNode } from 'react';
import Tooltip from '../ToolTip';

export default function NavItem({
	href,
	title,
	icon,
}: {
	href: string;
	title: string;
	icon: ReactNode;
}) {
	return (
		<Tooltip title={title}>
			<div>
				<Link href={href} passHref scroll={false}>
					<button
						className={
							'outline-none focus:outline-none flex h-12 w-12 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] bg-primary-300 text-center text-black shadow-lg dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-275'
						}
					>
						{icon}
					</button>
				</Link>
			</div>
		</Tooltip>
	);
}
