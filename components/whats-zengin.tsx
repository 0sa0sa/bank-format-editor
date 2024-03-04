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

export function WhatsZengin() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="m-8">
        <Button variant="outline">全銀フォーマットとは？</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>全銀フォーマットとは？</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              全銀協標準通信プロトコル（ベーシック手順、TCP/IP手順）によりデータ伝送を行うために全国銀行協会連合会が定めたファイルフォーマットです。
            </p>
            <a
              href="https://www.zenginkyo.or.jp/fileadmin/res/abstract/efforts/system/jba_protocol_pc.pdf"
              className="border-b-4 "
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
