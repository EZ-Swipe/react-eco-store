import { Field } from "formik";

const AdditionalInfoForm = () => {
  return (
    <>
      <div className="form-name">Additional Info</div>

      <div className="form-row">
        <label className="label" htmlFor="orderNotes">
          Order Notes (Optional)
        </label>
        <Field
          as="textarea"
          className="input input-notes"
          name="orderNotes"
          placeholder="Notes about your order, e.g. special notes for delivery"
          id="orderNotes"
        />
      </div>
    </>
  );
};

export default AdditionalInfoForm;
