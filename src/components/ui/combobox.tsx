"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComboBoxOption<TValue> {
  value: TValue;
  label: string;
}

interface ComboboxProps<TValue> {
  value: TValue | null;
  onChange: (value: TValue) => void;
  options: ComboBoxOption<TValue>[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Combobox<TValue>({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled,
  className,
}: ComboboxProps<TValue>) {
  const [open, setOpen] = useState(false);
  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? placeholder;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" disabled={disabled} className={cn("justify-between", className)}>
          {selectedLabel}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-40">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            {options.map((o) => (
              <CommandItem
                key={String(o.value)}
                value={String(o.value)}
                onSelect={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                <CheckIcon className={cn("mr-2 h-4 w-4", value === o.value ? "opacity-100" : "opacity-0")} />
                {o.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
