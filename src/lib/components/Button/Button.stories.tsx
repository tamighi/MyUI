import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["text", "contained"],
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    disabled: {
      defaultValue: false,
      type: "boolean"
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "text",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "text",
    color: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "text",
    disabled: true
  },
};
