import React, { useState } from "react";
import BillingForm from "./BillingForm";

function Form() {
  const [billingAddressCheckBox, setBillingAddressCheckBox] = useState(false);

  const [formFileds, setformFields] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
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
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={formFileds.fname}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              fname: e.target.value,
            }))
          }
        />
        <br />
        <label>Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          defaultValue={formFileds.lname}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              lname: e.target.value,
            }))
          }
        />
        <br />

        <label>Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          defaultValue={formFileds.address}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              address: e.target.value,
            }))
          }
        />
        <br />

        <label>City:</label>
        <input
          type="text"
          id="city"
          name="city"
          defaultValue={formFileds.city}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              city: e.target.value,
            }))
          }
        />
        <br />

        <label>State:</label>
        <input
          type="text"
          id="state"
          name="state"
          defaultValue={formFileds.state}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              state: e.target.value,
            }))
          }
        />
        <br />

        <label>Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          defaultValue={formFileds.postalCode}
          onChange={(e) =>
            setformFields((prevData) => ({
              ...prevData,
              postalCode: e.target.value,
            }))
          }
        />
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
