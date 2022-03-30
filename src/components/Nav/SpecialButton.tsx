import Tooltip from '../ToolTip';

export default function SpecialButton({
	href,
	title,
}: {
	href: string;
	title: string;
}) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<Tooltip title={title}>
				<button className=" flex h-12 w-12 shrink-0 transform-none cursor-pointer select-none items-center justify-center rounded-[23%] bg-primary-300 text-center text-black dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-400">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={'/static/bg.png'} alt="" className="h-6 w-6 rounded-full" />
				</button>
			</Tooltip>
		</a>
	);
}
