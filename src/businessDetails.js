export const businessDetailsSchema = {
  title: "Business Details",
  type: "object",
  properties: {
    name: {
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
