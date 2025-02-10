export const appConstants = {
  APP_NAME: 'Soild Principle',
  SINGLE_RESPONSIBILITY_PRINCIPLE: 'Single Responsibility Principle',
  OPEN_CLOSED_PRINCIPLE: 'Open Closed Principle',
  LISKOV_SUBSTITUTION_PRINCIPLE: 'Liskov Substitution Principle',
  INTERFACE_SEGREGATION_PRINCIPLE: 'Interface Segregation Principle',
  DEPENDENCY_INVERSION_PRINCIPLE: 'Dependency Inversion Principle',
} as const;

// THIS LINE IS USED FOR AUTOGENERATION. AND TO CHECK THE TYPE ERROR
export type AppConstants = (typeof appConstants)[keyof typeof appConstants];
