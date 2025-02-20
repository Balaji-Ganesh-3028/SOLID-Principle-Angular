export const dependencyInversionPrincipleConstants = {
  DEPENDENCY_INVERSION_PRINCIPLE_TITLE: 'Dependency Inversion Principle (DIP)',
  DIP_DESCRIPTION:
    'Dependency Inversion Principle (DIP) is an important principle of object-oriented design. It suggests that high-level modules should not depend on low-level modules, but both should depend on abstractions. The abstractions should not depend on the details, but the details should depend on the abstractions. This principle promotes loose coupling and high cohesion in software systems.',
  DIP_EXAMPLE_DESCRIPTION:
    'Our NotificationService depends on the MessageService abstraction instead of a concrete EmailMessageService, so we can easily swap in other message types (e.g., SMS) without modifying NotificationService.',
} as const;
