export const interfaceSegregationPrincipleConstants = {
  INTERFACE_SEGREGATION_PRINCIPLE_TITLE:
    'Interface Segregation Principle (ISP)',
  ISP_DESCRIPTION:
    'Interface Segregation Principle suggests that classes should not be forced to implement interfaces they don’t use. Instead, break interfaces into smaller, more specific ones.In other words, clients should not be forced to depend on methods they do not use. This principle helps to reduce coupling between components and makes code more modular, flexible, and maintainable.',
  ISP_EXAMPLE_DESCRIPTION:
    'Here, we separate reporting functionality (Report) from printing (Printable). Our CSVReport class only implements Report because it doesn’t need printing capabilities. This keeps classes focused and lean.',
} as const;
