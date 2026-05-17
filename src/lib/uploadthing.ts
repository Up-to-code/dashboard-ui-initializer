export async function uploadFiles(
  _endpoint: string,
  options: {
    files: File[];
    onUploadProgress?: (event: { file: File; progress: number; nextProgress: number }) => void;
    input?: unknown;
  },
) {
  options.files.forEach((file) => options.onUploadProgress?.({ file, progress: 100, nextProgress: 100 }));
  return options.files.map((file, index) => ({
    key: `demo-upload-${Date.now()}-${index}`,
    name: file.name,
    size: file.size,
    type: file.type,
    mimeType: file.type,
    url: URL.createObjectURL(file),
    ufsUrl: URL.createObjectURL(file),
    customId: null,
  }));
}
