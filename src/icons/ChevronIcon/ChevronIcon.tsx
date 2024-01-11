import React from 'react';
import { ChevronIconProps } from './ChevronIcon.types';

const ChevronIcon = ({size='sm', color='#607B96'}: ChevronIconProps) => {
	const sizesOptions = {
		sm: 10,
		md: 16,
		lg: 24,
	};

	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={sizesOptions[size]} viewBox="0 0 24 24" fill={color}>
			<path d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/>
		</svg>
	);
};

export default ChevronIcon;
