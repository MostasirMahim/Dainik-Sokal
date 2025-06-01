function toBengaliNumber(num: number | string): string {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => bnDigits[+d] ?? d)
    .join("");
}

function formatDateBn(dateString: string): string {
  const date = new Date(dateString);

  const day = toBengaliNumber(date.getDate());
  const hours = toBengaliNumber(date.getHours().toString().padStart(2, "0"));
  const minutes = toBengaliNumber(
    date.getMinutes().toString().padStart(2, "0")
  );

  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const monthName = months[date.getMonth()];

  return `${day} ${monthName}, ${hours}:${minutes}`;
}

export default formatDateBn;
