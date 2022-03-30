import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useTheme } from 'next-themes';

type TProps = {
	title: string;
};

const Tooltip: React.FC<TProps> = ({ children, title }) => {
	const { theme } = useTheme();

	return (
		<TooltipPrimitive.TooltipProvider>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Content
					side="top"
					sideOffset={5}
					className="rounded-md bg-black px-3 py-2 text-sm text-gray-50 shadow-lg dark:bg-white dark:text-gray-900"
				>
					<TooltipPrimitive.TooltipArrow
						fill={theme === 'light' ? '#000' : '#fff'}
					/>
					{title}
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.TooltipProvider>
	);
};

export default Tooltip;
