"use client";

import { P } from "@/components/typography";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Lock, Qr, Refresh, World } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { memo, useEffect, useState } from "react";

const SelectBox = memo(() => {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <Select defaultValue="standard" onOpenChange={() => setDropOpen(!dropOpen)}>
      <SelectTrigger
        className="w-[140px] min-w-[140px] h-[50px] rounded-none rounded-s-[5px] outline-none"
        value={dropOpen ? "open" : ""}
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="rounded-none rounded-b-[5px] -mt-2 z-50">
        <SelectGroup>
          <SelectItem value="standard">
            <P className="flex justify-center items-center gap-2 text-dark">
              <World />
              <span>Standard</span>
            </P>
          </SelectItem>
          <SelectSeparator />
          <SelectItem value="secure">
            <P className="flex justify-center items-center gap-2 text-dark">
              <Lock />
              <span>Secure</span>
            </P>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
SelectBox.displayName = "SelectBox";

export const ChatBox = memo(() => {
  const [disabled, setDisabled] = useState(true);
  const [url, setUrl] = useState<string>("");

  useEffect(() => setDisabled(url.length > 0 ? false : true), [url]);

  return (
    <div className="absolute -bottom-[62px] w-full max-w-[1320px]">
      <div className="bg-primary text-center w-[1096px] h-[300px] rounded-[20px] mx-auto overflow-hidden">
        <P variant="P3" className="text-white pb-7 px-[30px] pt-[28px]">
          Click the button below to receive your random link that you can share
          with your friends any way you like!
        </P>
        <div className="w-full h-full bg-black/[0.08] px-[30px] pt-[35px] pb-[25px] text-black">
          <div className="w-full flex">
            <SelectBox />
            <Input
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              className="h-[50px] rounded-s-none"
            />
            <div className="flex justify-center items-center pl-[6px] gap-[5px]">
              <div
                className={cn(
                  "bg-primary rounded-[5px] size-[50px] border-[1.5px] flex justify-center items-center cursor-pointer",
                  disabled && "cursor-not-allowed opacity-30"
                )}
              >
                <Refresh />
              </div>
              <div
                className={cn(
                  "bg-white rounded-[5px] size-[50px] flex justify-center items-center cursor-pointer",
                  disabled && "cursor-not-allowed opacity-30"
                )}
              >
                <Qr />
              </div>
              <div
                className={cn(
                  "bg-white rounded-[5px] size-[50px] flex justify-center items-center cursor-pointer",
                  disabled && "cursor-not-allowed opacity-30"
                )}
              >
                <Copy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ChatBox.displayName = "ChatBox";
