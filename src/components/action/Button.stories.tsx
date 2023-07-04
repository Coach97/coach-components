import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Action/Button",
    component: Button,
    args: {
        onClick: () => alert("Clicked!"),
        children: "Click Me!",
    }
}
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
    args: {}
}

export const Variant: Story = {
    args: {
        variant: "primary",
    }
}

export const Size: Story = {
    args: {
        size: "xs",
    }
}

export const Outline: Story = {
    args: {
        outline: true,
    }
}

export const Shape: Story = {
    args: {
        shape: "circle",
    }
}

export const NoAnimation: Story = {
    args: {
        noAnimation: true,
    }
}

export const Loading: Story = {
    args: {
        loading: true,
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
    }
}