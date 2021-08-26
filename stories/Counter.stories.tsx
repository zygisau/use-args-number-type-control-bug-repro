import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Counter } from './Counter';

export default {
	title: 'Example/Button',
	component: Counter,
	argTypes: {
		backgroundColor: { control: 'color' },
		label: { control: { type: 'number' } },
	},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
	const [{ primary, label }, updateArgs] = useArgs();
	const handleChange = () => updateArgs({ primary: !primary });
	const handleClickUp = () => updateArgs({ label: label + 1 });
	const handleClickDown = () => updateArgs({ label: label - 1 });

	return (
		<div>
			<Counter {...args} handleChange={handleChange} handleClickDown={handleClickDown} handleClickUp={handleClickUp} />
		</div>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 10,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 20,
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 30,
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 40,
};
