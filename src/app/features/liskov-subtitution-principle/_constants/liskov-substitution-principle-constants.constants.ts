export const liskovSubtitutionPrincipleConstants = {
  LISKOV_SUBSTITUTION_PRINCIPLE_TITLE: 'Liskov Substitution Principle',
  LSP_DESCRIPTION:
    'The Liskov Substitution Principle (LSP) is a fundamental concept in software engineering that is essential for designing and implementing maintainable and extensible systems. LSP states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. Violating the LSP can lead to unexpected behavior and bugs.',
  LSP_BASE_CLASS_HEADING: 'Base Class',
  LSP_BASE_CLASS_DESCRIPTION:
    'The base class is the superclass of the derived class. Now, consider a scenario where you have a base component class that outlines a contract for loading and displaying data. Derived components can implement this contract.',
  LSP_DERIVED_CLASS_HEADING: 'Derived Class',
  LSP_DERIVED_CLASS_DESCRIPTION:
    'Here, UserListComponent extends BaseListComponent and provides its own implementation of fetchItems(). Any functionality expecting a BaseListComponent can safely work with UserListComponent without knowing its internal details—this is the essence of LSP.',
} as const;
