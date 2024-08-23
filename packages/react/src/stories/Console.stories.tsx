import type { Meta, StoryObj } from "@storybook/react";
import Console from "@/components/Console";
import { LoggerProvider } from "@/context/LoggerContext";
import LoggerService from "@/lib/LoggerService";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Console",
  component: Console,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {}
} satisfies Meta<typeof Console>;

export default meta;
type Story = StoryObj<typeof meta>;

const CanvasWrapper: any = ({ children }: any) => {
  return (
    <div className="relative w-full h-screen bg-gray-100 p-4">
      <div className="relative w-full h-full bg-white border border-gray-300">
        <button
          onClick={() => {
            console.log("pressed button!");
          }}
        >
          Generate log
        </button>
        {children}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <LoggerProvider>
        <CanvasWrapper>
          <Console />
        </CanvasWrapper>
      </LoggerProvider>
    );
  }
};
