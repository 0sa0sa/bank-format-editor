"use client";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};
export function MainTextarea(props: Props) {
  return (
    <Textarea
      className="h-96 border border-gray-500 w-full rounded-md"
      placeholder="ダウンロードしたファイルを貼り付けてください。"
      value={props.text}
      onSelect={props.onSelect}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
    />
  );
}
