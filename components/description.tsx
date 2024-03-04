import { Separator } from "./ui/separator";

type Props = {
  text: string;
  selectionStart: number;
};

const dataRecord = [
  {
    title: "データ区分",
    digit: 1,
    description: "データを入れるときは基本２にする",
  },
  { title: "照会番号", digit: 8, description: "" },
  { title: "勘定日", digit: 6, description: "ＹＹＭＭＤＤ（和暦年・月・日）" },
  {
    title: "預入・払出日",
    digit: 6,
    description: "ＹＹＭＭＤＤ（和暦年・月・日）",
  },
  {
    title: "入払区分",
    digit: 1,
    description:
      "１：入金　２：出金\n※取引区分「１９：訂正」の場合\n　入金訂正の場合は「２：出金」\n　出金訂正の場合は「１：入金」",
  },
  {
    title: "取引区分",
    digit: 2,
    description:
      "１０：現金　１１：振込　１２：他店券入金　１３：交換（取立入金および交換払）　１４：振替　１８：その他　１９：訂正",
  },
  { title: "取引金額", digit: 12, description: "" },
  { title: "うち他店券金額", digit: 12, description: "" },
  {
    title: "交換呈示日",
    digit: 6,
    description: "ＹＹＭＭＤＤ（和暦年・月・日）",
  },
  {
    title: "不渡返還日",
    digit: 6,
    description: "ＹＹＭＭＤＤ（和暦年・月・日）",
  },
  {
    title: "手形・小切手区分",
    digit: 1,
    description: "１：小切手　２：約束手形　３：為替手形",
  },
  { title: "手形・小切手番号", digit: 7, description: "" },
  { title: "僚店番号", digit: 3, description: "" },
  { title: "振込依頼人コード", digit: 10, description: "" },
  {
    title: "振込依頼人または契約者番号",
    digit: 48,
    description:
      "入払区分が１（入金）の場合、振込依頼人名\n入払区分が２（出金）の場合、口座振替の需要\n家番号（左２０桁）あるいは収納企業名",
  },
  { title: "仕向銀行名", digit: 15, description: "" },
  { title: "仕向し店名", digit: 15, description: "" },
  { title: "適用内容", digit: 20, description: "" },
  { title: "EDI情報", digit: 20, description: "" },
  { title: "ダミー", digit: 1, description: "スペースが入る" },
];

export function Description(props: Props) {
  const str =
    '2,02000001,060202,060202,1,14,000000135000,000000000000,,,,,276,,"","ﾐﾂｲｽﾐﾄﾓ","ﾆｼｶｻｲ","",""," "';
  const splitStr = str.split(",");
  const commaPositions = splitStr.map((_, i) => {
    return splitStr.slice(0, i).join(",").length;
  });
  // console.log("commaPositions: ", commaPositions);

  // console.log("props.selectionStart: ", props.selectionStart);

  const caretIndexInComma =
    commaPositions.findIndex(position => position >= props.selectionStart) - 1;
  // console.log("caretIndexInComma: ", caretIndexInComma);

  return (
    <div className="flex flex-wrap items-center space-x-4 text-lg p-6">
      {dataRecord.map((record, index) => {
        const isStrong = index === caretIndexInComma;
        return (
          <>
            <span
              className={`whitespace-nowrap ${
                isStrong ? "font-bold bg-red-200" : ""
              }`}
            >
              {record.title}
            </span>
            <Separator className="h-8 bg-gray-400" orientation="vertical" />
          </>
        );
      })}
    </div>
  );
}
