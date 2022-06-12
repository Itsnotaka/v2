import {
	HomeIcon,
	MonitorIcon,
	PenIcon,
	MusicIcon,
	TwitterIcon,
	GithubIcon,
	EmailIcon,
	VideoIcon,
} from '../Icons';
import NavItem from './NavItem';
import RedirectItem from './RedirectItem';
import Separator from './Separator';
import ThemeChanger from './ThemeChanger';

export default function Nav() {
	return (
		<footer className="z-10 fixed inset-x-0 bottom-0 left-1/2 flex h-[70px] w-[calc(100%_-_64px)] max-w-max -translate-x-1/2 -translate-y-1/2 justify-between rounded-[23px] border border-primary-200 bg-primary-100 px-[10px]  text-sm shadow-primary backdrop-blur dark:border-primary-400 dark:border-opacity-20 dark:bg-mirage-900 dark:bg-opacity-[0.08]">
			<div className="flex w-full shrink-0 items-center gap-x-2 overflow-x-auto text-center">
				{/* <SpecialButton href={''} title={'Flow'} /> */}
				{/* <Separator /> */}
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
					href="/anime"
					icon={<VideoIcon className="h-6 w-6" />}
					title={'Anime'}
				/>
				{/* <NavItem
						href="/goods"
						icon={<GiftIcon className="h-6 w-6" />}
						title={'Goods'}
					/> */}
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
			</div>
		</footer>
	);
}
