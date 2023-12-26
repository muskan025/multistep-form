import React from "react";
import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserNameProps = UserData &{
   
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserNameProps) {
  return (
    <FormWrapper title="User Details">
      <fieldset>
        <legend>First Name</legend>
        <input
          type="text"
          required
          autoFocus
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </fieldset>

      <fieldset>
        <legend>Last Name</legend>
        <input type="text" required value={lastName} onChange={e=>updateFields({lastName:e.target.value})} />
      </fieldset>
      <fieldset>
        <legend>Age</legend>
        <input type="number" min={1} required value={age} onChange={e=>updateFields({age:e.target.value})}/>
      </fieldset>
    </FormWrapper>
  );
}
