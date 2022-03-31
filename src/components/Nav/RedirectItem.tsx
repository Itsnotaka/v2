import { ReactNode } from 'react';
import Tooltip from '../ToolTip';

export default function RedirectItem({
	href,
	title,
	icon,
}: {
	href: string;
	title: string;
	icon: ReactNode;
}) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<Tooltip title={title}>
				<button className="shadow-lg flex h-12 w-12 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] bg-primary-300 text-center text-black dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-400">
					{icon}
				</button>
			</Tooltip>
		</a>
	);
}
