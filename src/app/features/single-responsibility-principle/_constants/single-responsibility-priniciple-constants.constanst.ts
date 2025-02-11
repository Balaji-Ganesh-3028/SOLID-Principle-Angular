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
  FIXING_THE_VIOLATION_DESCROPTION: `First we"ll create a new component for displaying the list of product. This component is now responsibility for only displaying the list of product <br>
      We will remove the filter template form this component <br>
      We will create the new component for filtering logic. This component is now responsibility only for the filtering logic<br>
      Finally now the parent componet is updates with the both the selector <b>app-product-list</b>, <b>app-product-filter</b>`,
  VIOLATION_OF_SRP_HTML_IMAGE_HEADING: 'Violation of SRP (HTML)',
  VIOLATION_OF_SRP_TS_IMAGE_HEADING: 'Violation of SRP (TS)',
  VIOLATION_OF_SRP_EXAMPLE_DESCRIPTION: `Here in above image you can see that, This component violates the SRP
          because it has two responsibilities:
          displaying the list of products and filtering them by category. <br>
          This violates the <b>“one reason to change”</b> principle, as changes to the filtering behavior may affect the
          component’s
          rendering logic and vice versa.`,
  FIXING_THE_VIOLATION_PRODUCT_LIST_HTML_IMAGE_HEADING:
    'Fixing the Violation of SRP (HTML)',
  FIXING_THE_VIOLATION_PRODUCT_LIST_TS_IMAGE_HEADING:
    'Fixing the Violation of SRP (TS)',
  FIXING_THE_VIOLATION_PARENT_HTML: 'Parent HTML',
  FIXING_THE_VIOLATION_PARENT_TS: 'Parent TS',
  FIXING_THE_VIOLATION_PRODUCT_LIST_HTML: 'Product List HTML',
  FIXING_THE_VIOLATION_PRODUCT_LIST_TS: 'Product List TS',
  FIXING_THE_VIOLATION_PRODUCT_FILTER_HTML: 'Product Filter HTML',
  FIXING_THE_VIOLATION_PRODUCT_FILTER_TS: 'Product Filter TS',
} as const;
