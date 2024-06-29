import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AIAGENT_TITLE_FIELD } from "./AiAgentTitle";
import { JOURNALENTRY_TITLE_FIELD } from "../journalEntry/JournalEntryTitle";

export const AiAgentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="config" source="configField" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AiTask"
          target="aiAgentId"
          label="AITasks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AIAgent"
              source="aiagent.id"
              reference="AiAgent"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
