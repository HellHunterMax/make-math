export type buttonProps = {
	buttonText: string;
	onClick: () => void;
	disabled?: boolean;
};

const DisabledState = "disabled:opacity-30 disabled:cursor-not-allowed";
const styles =
	"border-4 leading-none m-4 px-4 py-2 rounded flex justify-center items-center h-";
const transition = "transition-all";

export function FilledButton({ buttonText, onClick, disabled }: buttonProps) {
	return (
		<button
			className={`border-cyan-600 bg-cyan-600 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-md ${DisabledState} ${styles} ${transition}`}
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}

export function OutlinedButton({ buttonText, onClick, disabled }: buttonProps) {
	return (
		<button
			className={`border-cyan-600 hover:bg-cyan-600  ${DisabledState} ${styles} ${transition}`}
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}
