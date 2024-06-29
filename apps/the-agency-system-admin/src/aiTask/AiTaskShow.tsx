import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AIAGENT_TITLE_FIELD } from "../aiAgent/AiAgentTitle";
import { JOURNALENTRY_TITLE_FIELD } from "../journalEntry/JournalEntryTitle";

export const AiTaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="AIAgent" source="aiagent.id" reference="AiAgent">
          <TextField source={AIAGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="JournalEntry"
          source="journalentry.id"
          reference="JournalEntry"
        >
          <TextField source={JOURNALENTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
