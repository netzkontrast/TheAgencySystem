import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AIAGENT_TITLE_FIELD } from "../aiAgent/AiAgentTitle";
import { JOURNALENTRY_TITLE_FIELD } from "../journalEntry/JournalEntryTitle";

export const AiTaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AITasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
