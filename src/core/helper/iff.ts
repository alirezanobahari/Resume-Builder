export default function iff<T>(condition: unknown, trueResult: T, falseResult?: T): T | undefined {
    if (condition) {
      return trueResult;
    } else {
      return falseResult;
    }
  }
  