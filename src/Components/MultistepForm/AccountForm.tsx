import React from "react";
import { FormWrapper } from "./FormWrapper";

type AccountCreationData = {
  email: string;
  password: string;
};

type AccountCreationFormProps = AccountCreationData & {
  updateFields: (fields: Partial<AccountCreationData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountCreationFormProps) {
  return (
    <FormWrapper title="Create Account">
      <fieldset>
        <legend>Eamil</legend>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </fieldset>
    </FormWrapper>
  );
}
