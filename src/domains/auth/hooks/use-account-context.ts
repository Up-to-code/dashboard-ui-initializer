"use client";

import { createContext, createElement, useContext, useMemo, type ReactNode } from "react";
import { appConfig } from "@/app-config";
import type { WorkspaceStatus } from "../workspace-status";

type AccountContextValue = {
  isPending: boolean;
  isSignedIn: boolean;
  workspace: {
    status: WorkspaceStatus;
    organizationId: string | null;
    isOrganizationPending: boolean;
    isConvexAuthPending: boolean;
    isConvexAuthenticated: boolean;
    isReady: boolean;
  };
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
    initials: string;
  };
  organization: {
    id: string | null;
    name: string;
    legalName?: string | null;
    type?: string | null;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
    address?: string | null;
    logo: string | null;
    slug: string | null;
    status: string;
    brandColor?: string;
    sound?: string;
    initials: string;
  };
};

const AccountContext = createContext<AccountContextValue | null>(null);

function getInitials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "AN";
}

export function deriveAccountOrganizationPending(input: {
  activeOrganizationPending: boolean;
  listedOrganizationsPending?: boolean;
}) {
  void input.listedOrganizationsPending;
  return input.activeOrganizationPending;
}

function useAccountContextValue(): AccountContextValue {
  return useMemo(() => {
    const userName = appConfig.user.name;
    const organizationName = appConfig.account.name;

    return {
      isSignedIn: true,
      isPending: false,
      workspace: {
        status: "ready",
        organizationId: appConfig.demoOrganizationId,
        isOrganizationPending: false,
        isConvexAuthPending: false,
        isConvexAuthenticated: true,
        isReady: true,
      },
      user: {
        id: appConfig.user.id,
        name: userName,
        email: appConfig.user.email,
        image: appConfig.user.image,
        initials: getInitials(userName),
      },
      organization: {
        id: appConfig.account.id,
        name: organizationName,
        legalName: appConfig.account.legalName,
        type: appConfig.account.type,
        email: appConfig.account.email,
        phone: appConfig.account.phone,
        website: appConfig.account.website,
        address: appConfig.account.address,
        logo: null,
        slug: "demo-account",
        status: appConfig.account.status,
        brandColor: appConfig.branding.accentColor,
        sound: "off",
        initials: getInitials(organizationName),
      },
    };
  }, []);
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const value = useAccountContextValue();
  return createElement(AccountContext.Provider, { value }, children);
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider.");
  }
  return value;
}
