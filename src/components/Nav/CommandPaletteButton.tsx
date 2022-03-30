import { ReactNode } from 'react';
import Tooltip from '../ToolTip';

export default function CommandPaletteButton({
	title,
	icon,
	onClick,
}: {
	title: string;
	icon: ReactNode;
	onClick: () => void;
}) {
	return (
		<Tooltip title={title}>
			<button
				onClick={onClick}
				className="flex h-12 w-12 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] bg-primary-300 text-center text-black dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-400"
			>
				{icon}
			</button>
		</Tooltip>
	);
}
