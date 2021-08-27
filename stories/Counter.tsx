import React from 'react';
import './button.css';

interface CounterProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	count: number;
	onClick?: () => void;
	handleChange: () => void;
	handleClickUp: () => void;
	handleClickDown: () => void;
}

export const Counter = ({ primary = false, size = 'medium', backgroundColor, count, handleChange, handleClickDown, handleClickUp, ...props }: CounterProps) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
	<div>
		<div>
			<label>Primary</label>
			<input type="checkbox" checked={primary} onChange={handleChange} />
		</div>
		<button onClick={handleClickDown}>-1</button>
	  
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			style={{ backgroundColor }}
			{...props}
		>
		{count}
		</button>

		<button onClick={handleClickUp}>+1</button>
	</div>
	);
};
