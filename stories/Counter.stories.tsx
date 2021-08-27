import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Counter } from './Counter';

export default {
	title: 'Example/Counter',
	component: Counter,
	argTypes: {
		backgroundColor: { control: 'color' },
		count: { control: { type: 'number' } },
	},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
	const [{ primary, count }, updateArgs] = useArgs();
	const handleChange = () => updateArgs({ primary: !primary });
	const handleClickUp = () => updateArgs({ count: count + 1 });
	const handleClickDown = () => updateArgs({ count: count - 1 });

	return (
		<div>
			<Counter {...args} handleChange={handleChange} handleClickDown={handleClickDown} handleClickUp={handleClickUp} />
		</div>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	count: 10,
};
