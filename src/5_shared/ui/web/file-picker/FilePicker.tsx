import styles from './filePicker.module.css';

type FilePickerProps = {
  title?: string;
  fileType?: string;
  onChange: (e: React.ChangeEvent) => void;
};

export function WebFilePicker(props: FilePickerProps) {
  const {
    title = 'Выберите PDF',
    fileType = 'application/pdf',
    onChange,
  } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles['input-file']} htmlFor="file-picker">
        <input
          type="file"
          id="file-picker"
          name="file-picker"
          accept={fileType}
          onChange={e => onChange(e)}
        />
        <span>{title}</span>
      </label>
    </div>
  );
}
