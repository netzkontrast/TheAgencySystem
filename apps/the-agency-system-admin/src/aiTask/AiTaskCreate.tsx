import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AiAgentTitle } from "../aiAgent/AiAgentTitle";
import { JournalEntryTitle } from "../journalEntry/JournalEntryTitle";

export const AiTaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="aiAgent.id" reference="AiAgent" label="AIAgent">
          <SelectInput optionText={AiAgentTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="journalEntry.id"
          reference="JournalEntry"
          label="JournalEntry"
        >
          <SelectInput optionText={JournalEntryTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
