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
      control: { type: "radio" },
    },
    variantColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    children: "Text",
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    children: "Contained",
    variant: "contained",
  },
};

export const DisabledText: Story = {
  args: {
    children: "DisabledText",
    variant: "text",
    disabled: true,
  },
};

export const DisabledContained: Story = {
  args: {
    children: "DisabledContained",
    variant: "contained",
    disabled: true,
  },
};
