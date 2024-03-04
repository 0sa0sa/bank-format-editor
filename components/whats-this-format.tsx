import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function WhatsThisFormat() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="mt-8">
        <Button variant="outline">このフォーマットは？</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>このフォーマットは？</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              三井住友銀行 Web21でダウンロードできるファイルのフォーマットです。
              以下リンク先の「データレコード
              1（普通、当座、貯蓄）」に該当します。
            </p>
            <a
              href="https://www.smbc.co.jp/hojin/eb/web21/pdf/file-layout_03.pdf"
              className="border-b-4"
            >
              具体的なフォーマット
            </a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>閉じる</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
