export default function MoonIcon({ className }: { className?: string }) {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 24 24"
			color="#858585"
			fill="none"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="currentColor"
			className={className}
		>
			<mask id="myMask2">
				<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
				<circle r="9" fill="black" cx="50%" cy="23%"></circle>
			</mask>
			<circle
				cx="12"
				cy="12"
				fill="#858585"
				mask="url(#myMask2)"
				r="9"
			></circle>
			<g stroke="currentColor" opacity="0">
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</g>
		</svg>
	);
}
