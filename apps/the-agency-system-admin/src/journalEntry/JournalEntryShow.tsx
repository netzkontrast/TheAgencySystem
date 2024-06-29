import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AIAGENT_TITLE_FIELD } from "../aiAgent/AiAgentTitle";
import { JOURNALENTRY_TITLE_FIELD } from "./JournalEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JournalEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AiTask"
          target="journalEntryId"
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
