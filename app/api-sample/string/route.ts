import { NextResponse } from "next/server";

export async function GET() {
  console.log(">>> Called /api/string !!!");
  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  };

  // 例: 長さが 10 のランダムな文字列を生成
  const randomString = generateRandomString(5);
  return NextResponse.json({ data: randomString });
}
