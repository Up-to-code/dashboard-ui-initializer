import { templateConfig } from "@/template-config";

type DemoAuthError = { message?: string; code?: string };
type DemoAuthResult<T> = Promise<{ data: T; error: DemoAuthError | null }>;

const demoOrganization = {
  id: templateConfig.account.id,
  name: templateConfig.account.name,
  slug: "demo-account",
  logo: null,
  metadata: JSON.stringify({
    status: templateConfig.account.status,
    brandColor: templateConfig.branding.accentColor,
  }),
};

const demoSession = {
  session: { id: "demo-session", userId: templateConfig.user.id },
  user: templateConfig.user,
};

function useDemoQuery<T>(data: T) {
  return {
    data,
    isPending: false,
    isLoading: false,
    error: null,
    refetch: async () => ({ data }),
  };
}

export const authClient = {
  useSession: () => useDemoQuery(demoSession),
  useActiveOrganization: () => useDemoQuery(demoOrganization),
  useListOrganizations: () => useDemoQuery([demoOrganization]),
  signOut: async (_input?: unknown): DemoAuthResult<null> => ({ data: null, error: null }),
  updateUser: async (_input?: unknown): DemoAuthResult<typeof demoSession.user> => ({ data: demoSession.user, error: null }),
  signIn: {
    social: async (_input?: unknown): DemoAuthResult<null> => ({ data: null, error: null }),
  },
  organization: {
    setActive: async (_input?: { organizationId?: string }): DemoAuthResult<typeof demoOrganization> => ({
      data: demoOrganization,
      error: null,
    }),
    list: async (): DemoAuthResult<Array<typeof demoOrganization>> => ({
      data: [demoOrganization],
      error: null,
    }),
  },
  oauth2: {
    consent: async (): DemoAuthResult<{ redirectURI: string }> => ({
      data: { redirectURI: "/dashboard" },
      error: null,
    }),
  },
};
