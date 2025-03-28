import "./App.css";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { Slider } from "@mui/material";
import { businessDetailsSchema } from "./businessDetails";
import { loanDetailsSchema } from "./loanDetails";

const schema = {
  type: "object",
  properties: {
    businessDetails: businessDetailsSchema,
    loanDetails: loanDetailsSchema,
  },
};

export const uiSchema = {
  loanDetails: {
    loanAmount: {
      "ui:widget": "slider",
    },
  },
};
const marks = [
  {
    value: 50000,
    label: "INR 50000",
  },
  {
    value: 500000,
    label: "INR 500000",
  },
];

export const widgets = {
  slider: ({ value, onChange }) => (
    <Slider
      value={value || 0}
      onChange={(_, newValue) => onChange(newValue)}
      step={50000}
      valueLabelDisplay="auto"
      marks={marks}
      min={50000}
      max={500000}
    />
  ),
};

function App() {
  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        validator={validator}
        onSubmit={({ formData }) => console.log(JSON.stringify(formData))}
      />
    </div>
  );
}

export default App;
