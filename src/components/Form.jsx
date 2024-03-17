import React, { useState } from "react";
import BillingForm from "./BillingForm";

function Form() {
  const [billingAddressCheckBox, setBillingAddressCheckBox] = useState(false);

  const [billingFormFileds, setBillingFormFields] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
  return (
    <div>
      <form>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <label>Last name:</label>
        <input type="text" id="lname" name="lname" />
        <br />

        <label>Address:</label>
        <input type="text" id="address" name="address" />
        <br />

        <label>City:</label>
        <input type="text" id="city" name="city" />
        <br />

        <label>State:</label>
        <input type="text" id="state" name="state" />
        <br />

        <label>Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" />
        <br />
        <input
          type="checkbox"
          id="billingAddress"
          name="billingAddress"
          onChange={(e) => setBillingAddressCheckBox(e.target.checked)}
        />
        <label> Use shipping address as billing address</label>

        {billingAddressCheckBox && (
          <BillingForm
            billingFormFileds={billingFormFileds}
            setBillingFormFields={setBillingFormFields}
          />
        )}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
