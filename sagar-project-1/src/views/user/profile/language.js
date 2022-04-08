import React from "react";

function Language(props) {
  const { formik, index } = props;
  return (
    <>
      <div>
        <p className="mb-2 ">Language</p>
        <select
          as="select"
          id="languages"
          {...formik.getFieldProps(`language.${index}.languages`)}
          // onBlur={ProgressInfoChange}
          onChange={(e) => {
            //   progressInfoHandler(e);
            formik.setFieldValue(`language.${index}.languages`, e.target.value);
          }}
          name={`language.${index}.languages`}
          className="my-select fieldcss"
        >
          <option value="default">Option</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
      <div>
        <p className="mb-2 ">Proficiency</p>
        <select
          as="select"
          id="proficiencys"
          {...formik.getFieldProps(`language.${index}.proficiencys`)}
          // onBlur={ProgressInfoChange}
          onChange={(e) => {
            //   progressInfoHandler(e);
            formik.setFieldValue(
              `language.${index}.proficiencys`,
              e.target.value
            );
          }}
          name={`language.${index}.proficiencys`}
          className="my-select fieldcss"
        >
          <option value="default" disabled selected hidden>
            Please Select
          </option>
          <option value="elementary">Elementary proficiency</option>
          <option value="limited">Limited working proficiency</option>
          <option value="professional">Professional working proficiency</option>
          <option value="full">Full professional proficiency</option>
          <option value="native">native or bilingual proficiency</option>
        </select>
      </div>
    </>
  );
}

export default Language;
