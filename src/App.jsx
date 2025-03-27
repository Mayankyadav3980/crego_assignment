// import { useState } from "react";

// import './App.css'
import Form from "@rjsf/mui";
// import { RJSFSchema } from '@rjsf/utils'
import validator from "@rjsf/validator-ajv8";

const schema = {
  title: "Business Details",
  type: "object",
  properties: {
    name: {
      // description: "Name of the Business",
      title: "name",
      type: "string",
    },
    GSTIN: {
      type: "string",
      pattern: "^[A-Z]{3}-\\d{3}$",
    },
  },
};

function App() {
    return <Form schema={schema} validator={validator} onSubmit={({formData})=>(console.log(JSON.stringify(formData)))}/>;
}

export default App;
