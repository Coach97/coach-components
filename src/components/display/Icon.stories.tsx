import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "Display/Icon",
    component: Icon,
    args: {
    }
}
export default meta;

type Story = StoryObj<typeof Icon>;
export const Default: Story = {
    args: {
        iconName: "BeakerIcon",
        iconType: "solid",
    }
}

export const Outline: Story = {
    args: {
        iconName: "BeakerIcon",
        iconType: "outline",
    }
}

export const Solid: Story = {
    args: {
        iconName: "BeakerIcon",
        iconType: "solid",
    }
}

export const Size: Story = {
    args: {
        iconName: "BeakerIcon",
        iconType: "solid",
        size: "xl",
    }
}