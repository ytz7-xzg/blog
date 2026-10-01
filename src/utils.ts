// 把 'YYYY-MM-DD' 格式化成「2026年10月1日」
export function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return `${year}年${month}月${day}日`;
}
