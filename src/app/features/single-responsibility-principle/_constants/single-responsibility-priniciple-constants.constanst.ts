export const singleResponsibilityPrincipleConstants = {
  SINGLE_RESPONSIBILITY_PRINCIPLE_SRP_TITLE:
    'Single Responsibility Principle (SRP)',
  SINGLE_RESPONSIBILITY_PRINCIPLE_SRP_DESCRIPTION:
    'A class should have one, and only one, reason to change.',
  SRP_SHORT_FORM: 'SRP',
  SRP_DESCRIPTION: `The Single Responsibility Principle (SRP) is a fundamental concept in software engineering. 
  It states that a class or module should have only one reason to change. <br>
  In other words, it should be responsible for only one functionality.`,
  VIOLATION_OF_SRP: 'Violation of SRP',
  FIXING_THE_VIOLATION: 'Fixing the violation',
  VIOLATION_OF_SRP_DESCRIPTION:
    'Consider a component that displays a list of products and allows the user to filter them by category.',
} as const;
