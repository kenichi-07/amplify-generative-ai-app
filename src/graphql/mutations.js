export const generateRecipe = /* GraphQL */ `
  mutation GenerateRecipe($input: String!) {
    generateRecipe(input: $input) {
      id
      input
      output
    }
  }
`;
