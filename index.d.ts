type Options = {
  filename: string;
}

interface NxStatic {
  blob2down(blob: Blob, options: Options): void
}
