import clsx from "clsx";

const FileUploadImage = ({ className, onChange, ...props }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };
  return (
    <div className={clsx("file-upload-image", className)}>
      <label className="file-upload-label">
        <input
          className="file-upload-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          {...props}
        />
      </label>
    </div>
  );
};

export default FileUploadImage;
