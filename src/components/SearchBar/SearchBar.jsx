import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onSearch }) => {
  // const usernameId = useId();
  const handleSubmit = (values, actions) => {
    const newValues = values;

    onSearch(newValues);
    actions.resetForm();
  };
  const initialValues = {
    username: "",
  };

  return (
    <div className={css.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={"username"}></label>
            <p>
              <Field
                type="text"
                name="username"
                className={css.field}
                placeholder="Input word for search images "
              />
              <ErrorMessage
                className={css.error}
                name="username"
                component="span"
              />
            </p>
          </div>

          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
