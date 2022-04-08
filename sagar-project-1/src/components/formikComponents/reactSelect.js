import { ErrorMessage, Field } from "formik";
import React from "react";
import Select from "react-select";

function ReactSelect(props) {
  const {  name, errorName, options, ...rest } = props;
  return (
    <>
      <div>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <>
                <Select
                  id={name}
                  {...field}
                  {...rest}
                  isMulti
                  selected={value}
                  options={options}
                  onChange={(val) => setFieldValue(name, val)}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />

                {/* <DateView
                id={name}
                {...field}
                {...rest}
                dateFormat="MM / dd / yyyy"
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                /> */}
              </>
            );
          }}
        </Field>
        <ErrorMessage name={errorName} />
      </div>
    </>
  );
}

export default ReactSelect;
