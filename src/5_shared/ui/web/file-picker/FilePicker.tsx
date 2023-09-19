type FilePickerProps = {
  title?: string;
  fileType?: string;
};

export function WebFilePicker(props: FilePickerProps) {
  const {title = 'Выберите PDF:', fileType = 'application/pdf'} = props;

  return (
    <div>
      <label htmlFor="file-picker">{title}</label>
      <input
        type="file"
        id="file-picker"
        name="file-picker"
        accept={fileType}
      />
    </div>
  );
}
