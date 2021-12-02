// export function fibonacci(position: number): number {
//   return 0;
// }

// export function fibonacci(position: number): number {
//   return position;
// }

// export function fibonacci(position: number): number {
//   if (position === 2) return 1;
//   return position;
// }

// export function fibonacci(position: number): number {
//   if (position >= 2) return position - 1;
//   return position;
// }

// export function fibonacci(position: number): number {
//   if (position >= 2) return position - 1;
//   return position;
// }

export function fibonacci(position: number): number {
  if (position >= 2) return fibonacci(position - 1) + fibonacci(position - 2);
  return position;
}
