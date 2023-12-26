import React from "react";
import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({ street, city, state, zip, updateFields }:AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <fieldset>
        <legend>Street</legend>
        <input
          type="text"
          required
          autoFocus
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <legend>City</legend>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <legend>State</legend>
        <input
          type="text"
          required
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <legend>Zip</legend>
        <input
          type="text"
          required
          value={zip}
          onChange={(e) => updateFields({ zip: e.target.value })}
        />
      </fieldset>
    </FormWrapper>
  );
}
