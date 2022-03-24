import React from 'react';

import { AirtableList } from './AirtableList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AirtableList',
  component: AirtableList,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AirtableList {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tableId: 'appblz15LnTqipptS',
  label: 'AirtableList',
};
