import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  username: string;
  department: 'finance' | 'engineering' | 'marketing';
  permissions: {
    canEditUsers: boolean;
    canApproveBudget: boolean;
    canAccessInternalTools: boolean;
  };

  constructor(
    username: string, 
    department: 'finance' | 'engineering' | 'marketing',
    permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {
    this.username = username;
    this.department = department;
    this.permissions = permissions;
  }

  clone(): UserProfilePrototype {
    const newPermissions = {
      canEditUsers: this.permissions.canEditUsers,
      canApproveBudget: this.permissions.canApproveBudget,
      canAccessInternalTools: this.permissions.canAccessInternalTools
    };

    return new UserProfile(this.username, this.department, newPermissions);
  }
}