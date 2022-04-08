import React from "react";
import  DateView  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field} from "formik";

function DatePicker(props) {
  const { label, placeHolder, name, errorName , ...rest } = props;
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
          {({form, field}) => {
            const { setFieldValue } = form
            const { value } = field
            return (
                <>
              <DateView
                id={name}
                {...field}
                {...rest}
                dateFormat="MM / dd / yyyy"
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                placeholderText={placeHolder}
                />
                
            </>
            );
        }}
        </Field>
        {/* <ErrorMessage name={errorName} /> */}
      </div>
    </>
  );
}

export default DatePicker;
