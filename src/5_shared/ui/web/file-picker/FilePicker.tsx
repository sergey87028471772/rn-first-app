type FilePickerProps = {
  title?: string;
  fileType?: string;
  onChange: (e: React.ChangeEvent) => void;
};

export function WebFilePicker(props: FilePickerProps) {
  const {
    title = 'Выберите PDF:',
    fileType = 'application/pdf',
    onChange,
  } = props;

  return (
    <div>
      <label htmlFor="file-picker">{title}</label>
      <input
        type="file"
        id="file-picker"
        name="file-picker"
        accept={fileType}
        onChange={e => onChange(e)}
      />
    </div>
  );
}
