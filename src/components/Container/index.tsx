import { ReactNode, useEffect, useState } from 'react';
// import CommandPalette from '../CommandPalette';
import Layout from '../Layout';
import { Nav } from '../Nav';

export default function Container({ children }: { children: ReactNode }) {
	// const [isOpen, setIsOpen] = useState(false);

	// useEffect(() => {
	// 	function onKeyDown(event: { key: string; metaKey: any; ctrlKey: any }) {
	// 		if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
	// 			setIsOpen(!isOpen);
	// 		}
	// 	}

	// 	window.addEventListener('keydown', onKeyDown);
	// 	return () => {
	// 		window.removeEventListener('keydown', onKeyDown);
	// 	};
	// }, [isOpen]);

	return (
		<>
			{/* <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} /> */}
			<Layout>
				{children}
				<Nav />
			</Layout>
		</>
	);
}
