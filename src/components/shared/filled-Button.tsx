export type ButtonProps = {
	buttonText: string;
	onClick: () => void;
};

export default function FilledButton({ buttonText, onClick }: ButtonProps) {
	return (
		<button
			className="border-4 border-cyan-600 px-4 hover:bg-cyan-600 rounded m-4"
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
}
