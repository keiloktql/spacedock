import { VERSION } from "@/lib/config";
import { Input } from "@/shadcn/ui/Input";
import { Label } from "@/shadcn/ui/Label";

type Props = {};

const General = (props: Props) => {
  return (
    <div>
      <span className="space-y-2">
        <Label htmlFor="version">Version</Label>
        <Input
          disabled
          copyable
          className="font-mono text-xs font-medium"
          value={VERSION}
        />
      </span>
    </div>
  );
};

export default General;
