export default function LightningIcon({ className }: { className: string }) {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M13 10V3L4 14h7v7l9-11h-7z"
			></path>
		</svg>
	);
}
