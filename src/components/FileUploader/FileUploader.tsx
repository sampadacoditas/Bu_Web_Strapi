import { IFileUploader } from "./IFileUploader";
import { UPLOAD_RESUME_MSGS } from "@/constants/constants";
import style from "./FileUploader.module.scss";
import { CustomImage } from "..";

const FileUploader = (props: IFileUploader) => {
  const { handleFile, value, deleteFile, name, label, error, commonSvgs = {} } = props;

  return (
    <div className={style.container}>
      <div className={style.labelSection}>
        <label className={style.label}>
          {label}
          <span>*</span>
        </label>
        <span className={error?.err ? `${style.limitErr}` : `${style.limit}`}>{UPLOAD_RESUME_MSGS?.LIMIT}</span>
      </div>
      <div className={error?.err ? `${style.errorContainer} ${style.uploadFile}` : style.uploadFile}>
        {value ? (
          <div className={style.resumeDetails}>
            <div className={style.resumeName}>
              <CustomImage
                src={error?.err ? commonSvgs?.errorIcon : commonSvgs?.greenTick}
                className={style.tick}
                alt="Error"
              />
              <span className={style.name}>{value?.name}</span>
            </div>
            <CustomImage src={commonSvgs?.deleteIcon} className={style.delete} onClick={deleteFile} alt="Delete" />
          </div>
        ) : (
          <div>
            <input
              name={name}
              type="file"
              id="file"
              className={style?.inputfile}
              onChange={handleFile}
              accept={"application/pdf"}
            ></input>
            <div className={style.uploadFileSection}>
              <CustomImage
                src={error?.err ? commonSvgs?.errorIcon : commonSvgs?.uploadFile}
                className={style.uploadIcon}
                alt="Upload"
              />
              <span className={style.placeholder}>{UPLOAD_RESUME_MSGS?.EXT_ERR}</span>
            </div>
          </div>
        )}
      </div>
      <div className={style?.error}>{error?.err && error?.msg}</div>
    </div>
  );
};
export default FileUploader;
