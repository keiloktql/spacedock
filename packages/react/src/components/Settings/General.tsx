import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VERSION } from "@/lib/config";
import { Input } from "@/shadcn/ui/Input";
import { Label } from "@/shadcn/ui/Label";
import { Switch } from "@/shadcn/ui/Switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@/shadcn/ui/Form";
import { toast } from "@/shadcn/ui/Toast/use-toast";
import { Button } from "@/shadcn/ui/Button";
import { useEffect } from "react";
import { useSettings } from "@/context/SettingsContext";

type Props = {};

const FilterFormSchema = z.object({
  log: z.boolean(),
  error: z.boolean(),
  warn: z.boolean(),
  info: z.boolean()
});

const General = (props: Props) => {
  const { filters, setFilters } = useSettings();
  const filterForm = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: filters,
    mode: "onChange"
  });

  const onSubmit = (data: z.infer<typeof FilterFormSchema>) => {
    setFilters({ system: true, user: true, ...data });
    filterForm.reset(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  };

  useEffect(() => {
    if (filterForm.formState.isSubmitSuccessful) {
      filterForm.reset(filters);
    }
  }, [filterForm.formState, filters]);

  // this is needed to tell form to update the isValid for some reason
  const placeholder = filterForm.formState.isValid;

  return (
    <div className="flex flex-col space-y-4">
      <span className="space-y-2">
        <Label htmlFor="version">Version</Label>
        <Input
          disabled
          copyable
          className="font-mono text-xs font-medium"
          value={VERSION}
        />
      </span>
      <span className="space-y-2">
        <Label htmlFor="switch">Filter messages type</Label>
        <Form {...filterForm}>
          <form
            onSubmit={filterForm.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div>
              <div className="space-y-4">
                <FormField
                  control={filterForm.control}
                  name="log"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm">Log</FormLabel>
                        <FormDescription className="text-xs">
                          The usual debugging messages
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={filterForm.control}
                  name="error"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm">Error</FormLabel>
                        <FormDescription className="text-xs">
                          Error messages
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={filterForm.control}
                  name="warn"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm">Warn</FormLabel>
                        <FormDescription className="text-xs">
                          Warning messages
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={filterForm.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm">Info</FormLabel>
                        <FormDescription className="text-xs">
                          Highlighted/info debugging messages
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              disabled={
                filterForm.formState.isSubmitting ||
                !filterForm.formState.isDirty ||
                !filterForm.formState.isValid
              }
              type="submit"
            >
              Save
            </Button>
          </form>
        </Form>
      </span>
    </div>
  );
};

export default General;
