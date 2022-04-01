export default function GiftIcon({ className }: { className: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M4 13C4 12.4477 4.44772 12 5 12H19C19.5523 12 20 12.4477 20 13V18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V13Z"
				fill="#858585"
				fillOpacity="0.25"
			/>
			<path
				d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V10C21 11.1046 20.1046 12 19 12H5C3.89543 12 3 11.1046 3 10V9Z"
				fill="#858585"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 6C7 4.34315 8.34315 3 10 3C10.7684 3 11.4692 3.28885 12 3.76389C12.5308 3.28885 13.2316 3 14 3C15.6569 3 17 4.34315 17 6C17 7.65685 15.6569 9 14 9H13V21H11V9H10C8.34315 9 7 7.65685 7 6ZM11 7H10C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V7ZM13 7H14C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6V7Z"
				fill="#12131A"
			/>
		</svg>
	);
}