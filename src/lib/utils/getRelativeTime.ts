"use client";
function toBengaliNumber(num: number): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)] ?? d).join('');
}

function getRelativeTimeBn(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime(); 

  if (isNaN(diffMs)) return 'অজানা সময়';

  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `${toBengaliNumber(diffMins)} মিনিট আগে`;
  if (diffHours < 24) return `${toBengaliNumber(diffHours)} ঘণ্টা আগে`;
  return `${toBengaliNumber(diffDays)} দিন আগে`;
}

export default getRelativeTimeBn;

