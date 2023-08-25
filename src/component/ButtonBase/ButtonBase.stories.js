import { ButtonBase } from ".";

export default {
  title: "Components/ButtonBase",
  component: ButtonBase,
  argTypes: {
    size: {
      options: ["xl", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    icon: {
      options: ["only", "leading", "false", "dot", "trailing"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "xl",
    icon: "only",
    className: {},
    textClassName: {},
    text: "Button CTA",
  },
};
