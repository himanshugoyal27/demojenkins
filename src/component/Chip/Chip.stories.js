import { Chip } from ".";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    status: {
      options: ["submitted", "accepted", "rejected", "to-do"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "submitted",
    className: {},
    divClassName: {},
    text: "Submitted",
  },
};
