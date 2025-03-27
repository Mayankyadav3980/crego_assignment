export const loanDetailsSchema = {
    title: "Loan Details",
    type: "object",
    properties: {
        creditScore: {
            title: "Credit Score",
            type: "number"
        },
        loanAmount: {
            title: "Required Loan Amount",
            type: "number",
            minimum: 50000,
            maximum: 500000
        }
    }
}