// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function debounced(
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
