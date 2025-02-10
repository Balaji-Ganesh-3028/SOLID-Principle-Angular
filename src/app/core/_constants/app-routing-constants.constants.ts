export const appRoutingConstants = {
  SINGLE_RESPONSIBILITY_PRINCIPLE: {
    WITHSLASH: '/single-responsibility-principle',
    WITHOUTSLASH: 'single-responsibility-principle',
  },
  OPEN_CLOSED_PRINCIPLE: {
    WITHSLASH: '/open-closed-principle',
    WITHOUTSLASH: 'open-closed-principle',
  },
  LISKOV_SUBSTITUTION_PRINCIPLE: {
    WITHSLASH: '/liskov-substitution-principle',
    WITHOUTSLASH: 'liskov-substitution-principle',
  },
  INTERFACE_SEGREGATION_PRINCIPLE: {
    WITHSLASH: '/interface-segregation-principle',
    WITHOUTSLASH: 'interface-segregation-principle',
  },
  DEPENDENCY_INVERSION_PRINCIPLE: {
    WITHSLASH: '/dependency-inversion-principle',
    WITHOUTSLASH: 'dependency-inversion-principle',
  },
} as const;

export type AppRoutingConstants =
  (typeof appRoutingConstants)[keyof typeof appRoutingConstants];
