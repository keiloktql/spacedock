import type { Meta, StoryObj } from "@storybook/react";
import Console from "@/components/Console";
import { Button } from "@/shadcn/ui/Button";
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
      <div className="relative flex space-y-4 flex-col w-full h-full bg-white border border-gray-300">
        <span className="flex items-center space-x-2">
          <Button
            onClick={() => {
              LoggerService.log("clicked log!");
            }}
          >
            Generate log
          </Button>
          <p>Should generate "clicked log" message with `text-slate-400`</p>
        </span>
        <span className="flex items-center space-x-2">
          <Button
            onClick={() => {
              LoggerService.info("clicked info!");
            }}
          >
            Generate info
          </Button>
          <p>Should generate "clicked warn" message with `text-blue-400`</p>
        </span>
        <span className="flex items-center space-x-2">
          <Button
            onClick={() => {
              LoggerService.error("clicked error!");
            }}
          >
            Generate error
          </Button>
          <p>Should generate "clicked error" message with `text-red-400`</p>
        </span>
        <span className="flex items-center space-x-2">
          <Button
            onClick={() => {
              LoggerService.warn("clicked warn!");
            }}
          >
            Generate warn
          </Button>
          <p>Should generate "clicked warn" message with `text-yellow-400`</p>
        </span>
      </div>
      {children}
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <CanvasWrapper>
        <Console />
      </CanvasWrapper>
    );
  }
};
