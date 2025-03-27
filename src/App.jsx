import "./App.css";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { businessDetailsSchema } from "./businessDetails";
import { loanDetailsSchema } from "./loanDetails";

const schema = {
  type: "object",
  properties: {
    businessDetails: businessDetailsSchema,
    loanDetails: loanDetailsSchema,
  },
};

const uiSchema = {
  loanDetails:{

    loanAmount: {
      "ui:widget": "range"
    }
  }
}

function App() {
  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={({ formData }) => console.log(JSON.stringify(formData))}
      />
    </div>
  );
}

export default App;
