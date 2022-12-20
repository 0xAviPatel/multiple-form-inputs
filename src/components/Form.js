import React, { useState } from "react";

const Form = () => {
  const initialValues = {
    fname: "",
    lname: "",
    occupation: "",
    contact_number: "",
  };

  const [values, setValues] = useState(initialValues);

  console.log(`---values---`,values);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  let arr = [];
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`first`)
    arr.push(values);
    console.log(`second`)
    // setValues(initialValues);
  };

  console.log(`====arr====`, arr);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={values.fname}
          onChange={handleInputChange}
          name="fname"
          label="fname"
          placeholder="fname"
        />

        <input
          value={values.lname}
          onChange={handleInputChange}
          name="lname"
          label="lname"
          placeholder="lname"
        />

        <input
          value={values.occupation}
          onChange={handleInputChange}
          name="occupation"
          label="occupation"
          placeholder="occupation"
        />

        <input
          value={values.contact_number}
          onChange={handleInputChange}
          name="contact_number"
          label="contact_number"
          placeholder="contact_number"
        />

        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default Form;
