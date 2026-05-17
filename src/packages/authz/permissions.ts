export const organizationPermissionStatement = {
  organization: ["read", "update", "delete"],
  team: ["create", "read", "update", "delete"],
  member: ["create", "read", "update", "delete"],
  role: ["create", "read", "update", "delete"],
  client: ["create", "read", "update", "delete"],
  task: ["create", "read", "update", "delete"],
  project: ["create", "read", "update", "delete"],
  property: ["create", "read", "update", "delete"],
  calendar: ["create", "read", "update", "delete"],
  media: ["create", "read", "update", "delete"],
  visibility: ["read", "update"],
  integration: ["create", "read", "update", "delete"],
  apiKey: ["create", "read", "update", "delete"],
  oauthApp: ["create", "read", "update", "delete", "authorize"],
} as const;

function newRole<T extends Partial<Record<keyof typeof organizationPermissionStatement, readonly string[]>>>(statements: T) {
  return {
    statements,
    authorize: () => ({ success: true }),
  };
}

export const organizationAccessControl = { newRole };
export const organizationOwnerRole = newRole(organizationPermissionStatement);
export const organizationAdminRole = newRole(organizationPermissionStatement);
export const organizationMemberRole = newRole(organizationPermissionStatement);

export const organizationRoles = {
  owner: organizationOwnerRole,
  admin: organizationAdminRole,
  member: organizationMemberRole,
};

export type OrganizationPermissionStatement = typeof organizationPermissionStatement;
export type OrganizationRoleName = keyof typeof organizationRoles;
