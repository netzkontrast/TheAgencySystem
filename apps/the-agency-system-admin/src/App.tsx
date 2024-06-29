import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AiAgentList } from "./aiAgent/AiAgentList";
import { AiAgentCreate } from "./aiAgent/AiAgentCreate";
import { AiAgentEdit } from "./aiAgent/AiAgentEdit";
import { AiAgentShow } from "./aiAgent/AiAgentShow";
import { JournalEntryList } from "./journalEntry/JournalEntryList";
import { JournalEntryCreate } from "./journalEntry/JournalEntryCreate";
import { JournalEntryEdit } from "./journalEntry/JournalEntryEdit";
import { JournalEntryShow } from "./journalEntry/JournalEntryShow";
import { AiTaskList } from "./aiTask/AiTaskList";
import { AiTaskCreate } from "./aiTask/AiTaskCreate";
import { AiTaskEdit } from "./aiTask/AiTaskEdit";
import { AiTaskShow } from "./aiTask/AiTaskShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TheAgencySystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AiAgent"
          list={AiAgentList}
          edit={AiAgentEdit}
          create={AiAgentCreate}
          show={AiAgentShow}
        />
        <Resource
          name="JournalEntry"
          list={JournalEntryList}
          edit={JournalEntryEdit}
          create={JournalEntryCreate}
          show={JournalEntryShow}
        />
        <Resource
          name="AiTask"
          list={AiTaskList}
          edit={AiTaskEdit}
          create={AiTaskCreate}
          show={AiTaskShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
