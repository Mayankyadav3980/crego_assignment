export const loanDetailsSchema = {
  title: "Loan Details",
  type: "object",
  properties: {
    creditScore: {
      title: "Credit Score",
      type: "number",
    },
    loanAmount: {
      title: "Required Loan Amount",
      type: "number",
      minimum: 50000,
      maximum: 500000,
    },

    guarantors: {
      type: "array",
      title: "Guarantors",
      items: {
        type: "object",
        properties: {
          name: { type: "string", title: "Name" },
          panNumber: {
            type: "string",
            title: "PAN Number",
            minLength: 10,
            maxLength: 10,
            pattern: "^([A-Z]{5}[0-9]{4}[A-Z]{1})$",
          },
          relationship: {
            type: "string",
            title: "Relationship with Applicant",
            enum: ["Father", "Mother", "Brother", "Sister", "Spouse", "Other"],
          },
          relation: {
            type: "string",
            title: "Relation (Specify if Other)",
          },
        },
        dependencies: {
          relationship: {
            oneOf: [
              {
                properties: {
                  relationship: { enum: ["Other"] },
                  relation: { type: "string" },
                },
              },
              {
                properties: {
                  relationship: {
                    enum: ["Father", "Mother", "Brother", "Sister", "Spouse"],
                  },
                },
              },
            ],
          },
        },
      },
    },
    bankStatement: {
      type: "array",
      title: "Upload Bank Statements",
      items: {
        type: "string",
        format: "data-url",
      },
    },
  },
  dependencies: {
    creditScore: {
      oneOf: [
        { properties: { creditScore: { minimum: 700 } } },
        {
          properties: {
            creditScore: { maximum: 699 },
            guarantors: { type: "array" },
            bankStatements: { type: "array" },
          },
        },
      ],
    },
  },
};
