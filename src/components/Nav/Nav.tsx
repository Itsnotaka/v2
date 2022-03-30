import { ReactNode } from 'react';

export default function Nav({ children }: { children?: ReactNode }) {
	return (
		<footer className="fixed inset-x-0 bottom-0 left-1/2 flex h-[70px] backdrop-blur w-[calc(100%_-_64px)] max-w-max -translate-x-1/2 -translate-y-1/2 justify-between rounded-[23px] border border-primary-200 bg-primary-100  px-[10px] text-sm shadow-primary dark:border-primary-400 dark:border-opacity-20 dark:bg-black dark:bg-opacity-[0.08]">
			<div className="flex w-full shrink-0 items-center gap-x-2 overflow-x-auto text-center">
				{children}
			</div>
		</footer>
	);
}
