import React from "react";

function BillingForm({ billingFormFileds, setBillingFormFields } = false) {
  return (
    <div>
      <label>First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        defaultValue={billingFormFileds.fname}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            fname: e.target.value.trim(),
          }))
        }
      />
      <br />
      <label>Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        defaultValue={billingFormFileds.lname}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            lname: e.target.value.trim(),
          }))
        }
      />
      <br />

      <label>Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        defaultValue={billingFormFileds.address}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            address: e.target.value.trim(),
          }))
        }
      />
      <br />

      <label>City:</label>
      <input
        type="text"
        id="city"
        name="city"
        defaultValue={billingFormFileds.city}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            city: e.target.value.trim(),
          }))
        }
      />
      <br />

      <label>State:</label>
      <input
        type="text"
        id="state"
        name="state"
        defaultValue={billingFormFileds.state}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            state: e.target.value.trim(),
          }))
        }
      />
      <br />

      <label>Postal Code:</label>
      <input
        type="text"
        id="postalCode"
        name="postalCode"
        defaultValue={billingFormFileds.postalCode}
        onChange={(e) =>
          setBillingFormFields((prevData) => ({
            ...prevData,
            postalCode: e.target.value.trim(),
          }))
        }
      />
      <br />
    </div>
  );
}

export default BillingForm;
