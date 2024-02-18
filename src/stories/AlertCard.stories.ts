import type { Meta, StoryObj } from '@storybook/react';

import { AlertCard } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: any = {
    title: 'Acient-Ui/AlertCardText',
    component: AlertCard,
    parameters: {},
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AlertCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Padrao: Story = {
    name: 'Padrao Simples',
    args: {
        text: 'Pensando mais a longo prazo, a valorização de fatores subjetivos causa impacto indireto na reavaliação dos procedimentos normalmente adotados.',
        labelAgree: 'Sim',
        labelRecuse: 'Não',
        onClickRecuse: () => console.log('não'),
        onClickAgree: () => console.log('Sim')
    }
};
