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
      title: "Business name",
      type: "string",
    },
    GSTIN: {
      type: "string",
      title: "GSTIN (ex: 29A123456789L1Z)",
      minLength: 15,
      maxLength: 15,
      pattern: "^([0-9]{2}[0-9A-Z]{13})$",
    },
    directors: {
      title: "Director",
      type: "array",
      items: {
        // title: "Director",
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          PANNumber: {
            type: "string",
            title: "PAN Number (ex: BNZAA2318J)",
            minLength: 10,
            maxLength: 10,
            pattern: "^([A-Z]{5}[0-9]{4}[A-Z]{1})$",
          },
          tags: {
            // description: "Tags",
            title: "Tags",
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
          },
        },
      },
    },
  },
  required: ["name", "GSTIN", "directors"],
};

function App() {
    return <Form schema={schema} validator={validator} onSubmit={({formData})=>(console.log(JSON.stringify(formData)))}/>;
}

export default App;
