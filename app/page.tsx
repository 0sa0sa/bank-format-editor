"use client";
import { Description } from "@/components/description";
import { MainTextarea } from "@/components/main-textarea";
import { Button } from "@/components/ui/button";
import { WhatsThisFormat } from "@/components/whats-this-format";
import { WhatsZengin } from "@/components/whats-zengin";
import { useState } from "react";

export default function Home() {
  const str =
    '2,11111111,060202,060202,1,14,000000480000,000000000000,,,,,111,,"","ﾐﾂｲｽﾐﾄﾓetc","仕向し店名","",""," "';
  const [text, setText] = useState(str);
  const [selectionStart, setSelectionStart] = useState(0);

  const set = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setSelectionStart(e.currentTarget.selectionStart);
  };

  return (
    <main className="flex flex-col items-center justify p-24">
      <p>カーソル位置：{selectionStart}</p>
      <menu className="flex w-full justify-end gap-4 m-6">
        <Button>Import</Button>
        <Button>Export</Button>
      </menu>
      <Description text={text} selectionStart={selectionStart} />
      <MainTextarea
        text={text}
        onChange={e => {
          setText(e.target.value);
          setSelectionStart(e.target.selectionStart);
        }}
        onSelect={set}
        onKeyUp={set}
      />
      <WhatsThisFormat />
      <WhatsZengin />
    </main>
  );
}
