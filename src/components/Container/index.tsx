import { ReactNode, useEffect, useState } from 'react';
// import CommandPalette from '../CommandPalette';
import {
	HomeIcon,
	TwitterIcon,
	GithubIcon,
	EmailIcon,
	MonitorIcon,
	PenIcon,
	// CmdIcon,
	MusicIcon,
	GiftIcon,
} from '../Icons';
import Layout from '../Layout';
import {
	Nav,
	SpecialButton,
	Separator,
	NavItem,
	RedirectItem,
	ThemeChanger,
	// CommandPaletteButton,
} from '../Nav';

export default function Container({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		function onKeyDown(event: { key: string; metaKey: any; ctrlKey: any }) {
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				setIsOpen(!isOpen);
			}
		}

		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen]);

	return (
		<>
			{/* <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} /> */}
			<Layout>
				{children}

				<Nav>
					<SpecialButton href={''} title={'Flow'} />
					<Separator />
					<NavItem
						href="/"
						icon={<HomeIcon className="h-6 w-6" />}
						title={'Home'}
					/>
					<NavItem
						href="/setups"
						icon={<MonitorIcon className="h-6 w-6" />}
						title={'Setups'}
					/>
					<NavItem
						href="/writings"
						icon={<PenIcon className="h-6 w-6" />}
						title={'Writings'}
					/>
					<NavItem
						href="/music"
						icon={<MusicIcon className="h-6 w-6" />}
						title={'Music'}
					/>
					<NavItem
						href="/goods"
						icon={<GiftIcon className="h-6 w-6" />}
						title={'Goods'}
					/>
					{/* <CommandPaletteButton
						icon={<CmdIcon className="h-5 w-5" />}
						title={'Command Palette'}
						onClick={() => {
							setIsOpen(true);
						}}
					/> */}
					<Separator />
					<RedirectItem
						href="https://twitter.com/gem8160"
						icon={<TwitterIcon className="h-6 w-6" />}
						title={'Twitter'}
					/>
					<RedirectItem
						href="https://github.com/Itsnotaka"
						icon={<GithubIcon className="h-6 w-6" />}
						title={'Github'}
					/>
					<RedirectItem
						href="mailto:kaka@kakaka.dev"
						icon={<EmailIcon className="h-6 w-6" />}
						title={'Mail'}
					/>
					<Separator />
					<ThemeChanger />
				</Nav>
			</Layout>
		</>
	);
}
