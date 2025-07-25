import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const TestCommand = () => {
  return (
    <React.Fragment>
      Test Command
      <section className="w-full mx-auto">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                Profile
                <CommandShortcut>P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                Billing
                <CommandShortcut>B</CommandShortcut>
              </CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>
    </React.Fragment>
  );
};

export default TestCommand;
