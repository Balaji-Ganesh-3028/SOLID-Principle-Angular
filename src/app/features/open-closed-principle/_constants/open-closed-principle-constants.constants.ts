export const openClosedPrincipleConstants = {
  OPEN_CLOSED_PRINCIPLE_SRP_TITLE: 'Open Closed Principle (OCP)',
  OPEN_CLOSED_PRINCIPLE_SRP_DESCRIPTION: `The Open/Closed Principle states that software entities (classes, modules, functions, etc.) 
  should be open for extension but closed for modification. <br>
  In other words, we should be able to add new functionality without modifying existing code.
  This principle helps in reducing code coupling, improving code scalability, and making the code more reusable.
  `,
  VIOLATION_OF_OCP: 'Violation of OCP',
  VIOLATION_OF_OCP_DESCRIPTION:
    'Consider this below example for violation of OCP, At first we are added only heading and description. Now I would like to add one more talbe to display the user-list. Here we are adding new functionality with modifying existing code.',
  FIXING_THE_VIOLATION: 'Fixing the violation of OCP',
  FIXING_OF_OCP_DESCRIPTION:
    'Consider the below example for the fixing the OCP, Here we have created the new component for the new feature or new template to be added. Due to this OCP violation have been fixed.',
  VIOLATION_OF_OCP_IMAGE_HEADING: 'Violation of OCP',
  FIXING_OF_OCP_IMAGE_HEADING: 'Fixing the violation of OCP',
} as const;
