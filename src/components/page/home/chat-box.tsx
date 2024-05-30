"use client";

import { Note, P } from "@/components/typography";
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
import { Dispatch, FC, SetStateAction, memo, useEffect, useState } from "react";

type UrlType = "standard" | "secure";
type ISelectBox = { setUrlType: Dispatch<SetStateAction<UrlType>> };
const SelectBox: FC<ISelectBox> = memo(({ setUrlType }) => {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <Select
      defaultValue="standard"
      onOpenChange={() => setDropOpen(!dropOpen)}
      onValueChange={(e) => setUrlType(e as UrlType)}
    >
      <SelectTrigger
        className={cn(
          "w-[140px] min-w-[140px] h-[50px] rounded-none rounded-s-[5px] outline-none",
          dropOpen && "rounded-none rounded-tl-[5px]"
        )}
        value={dropOpen ? "open" : ""}
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="rounded-none rounded-b-[5px] -mt-1 z-50">
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

interface IIconCard {
  disabled?: boolean;
  onclick?: () => void;
}
const IconCard: FC<IChildrenClassName & IIconCard> = memo(
  ({ children, className, disabled, onclick }) => (
    <div
      onClick={onclick}
      className={cn(
        "bg-white rounded-[5px] size-[50px] flex justify-center items-center cursor-pointer",
        disabled && "cursor-not-allowed opacity-30",
        className
      )}
    >
      {children}
    </div>
  )
);
IconCard.displayName = "IconCard";

export const ChatBox = memo(() => {
  const [urlType, setUrlType] = useState<UrlType>("standard");
  const [emptyUrl, setEmptyUrl] = useState(true);
  const [btmDisabled, setBtnDisabled] = useState(true);
  const [url, setUrl] = useState<string>("");
  const [secureCode, setSecureCode] = useState<string>("");

  useEffect(() => setEmptyUrl(url.length > 0 ? false : true), [url]);

  return (
    <div className="absolute -bottom-[62px] w-full max-w-[1320px]">
      <div className="bg-primary text-center w-[1096px] h-[300px] rounded-[20px] mx-auto overflow-hidden">
        <P variant="P3" className="text-white pb-7 px-[30px] pt-[28px]">
          Click the button below to receive your random link that you can share
          with your friends any way you like!
        </P>
        <div className="w-full h-full bg-black/[0.08] px-[30px] pt-[35px] pb-[25px] text-black space-y-[13px]">
          <div className="w-full flex">
            <SelectBox setUrlType={setUrlType} />
            <div className="flex w-full">
              <Input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                className={cn(
                  "h-[50px] rounded-none rounded-e-[5px] border-r-0",
                  urlType === "secure" && "rounded-none border-none"
                )}
              />

              {urlType === "secure" && (
                <div className="bg-white flex justify-center items-center rounded-e-[5px] overflow-hidden border-s max-w-[220px]">
                  <Lock className="w-5 border-none ml-5" />
                  <Input
                    type="text"
                    onChange={(e) => setSecureCode(e.target.value)}
                    className="h-[50px] rounded-none border-none"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-center items-center pl-[6px] gap-[5px]">
              <IconCard
                disabled={emptyUrl}
                className={"bg-primary border-[1.5px]"}
              >
                <Refresh />
              </IconCard>
              <IconCard disabled={emptyUrl}>
                <Qr />
              </IconCard>
              <IconCard disabled={emptyUrl}>
                <Copy />
              </IconCard>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-white min-w-[300px] h-[65px]"></div>
            <div
              className={cn(
                "bg-white w-full h-[65px] rounded-[6px] flex justify-center items-center",
                btmDisabled ? "cursor-not-allowed" : "cursor-pointer"
              )}
            >
              <P
                variant="P2"
                className={cn(
                  "font-bold leading-normal",
                  btmDisabled ? "text-light-gray " : "text-primary"
                )}
              >
                Generate Link
              </P>
            </div>
          </div>
          <Note className="text-center text-white pt-0.5">
            By starting this chat session, you agree to our Terms of Use and
            Privacy Policy, and that you and everybody you share the chat link
            with is above 16 years of age.
          </Note>
        </div>
      </div>
    </div>
  );
});

ChatBox.displayName = "ChatBox";
