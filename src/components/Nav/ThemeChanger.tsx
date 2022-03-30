import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../Icons';
import Tooltip from '../ToolTip';

export default function ThemeChanger() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const handleThemeChange = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	};

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<Tooltip title={'Switch Theme'}>
			<button
				onClick={() => {
					handleThemeChange();
				}}
				className="flex h-12 w-12 shrink-0 transform-none cursor-pointer items-center justify-center rounded-[23%] bg-primary-300 text-center text-black dark:bg-primary-500 dark:bg-opacity-50 dark:text-primary-400"
			>
				{resolvedTheme === 'light' ? (
					<SunIcon className="h-6 w-6" />
				) : (
					<MoonIcon className="h-6 w-6 rotate-45" />
				)}
			</button>
		</Tooltip>
	);
}
