import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
    title: "Display/Loading",
    component: Loading,
    args: {
    }
}
export default meta;

type Story = StoryObj<typeof Loading>;
export const Default: Story = {
    args: {}
}

export const Size: Story = {
    args: {
        size: "lg",
    }
}

export const Color: Story = {
    args: {
        color: "primary",
    }
}

export const Type: Story = {
    args: {
        type: "bars",
    }
}