import { appConfig } from "@/app-config";
import type { UpdateOrganizationProfileValues } from "../validation/organization.schema";

export type OrganizationProfile = {
  organizationId: string;
  name: string;
  legalName: string;
  type: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  updatedAt: number;
};

export async function updateOrganizationProfileRequest(
  organizationId: string,
  input: UpdateOrganizationProfileValues,
) {
  return {
    organizationId,
    name: input.name || appConfig.account.name,
    legalName: input.legalName || appConfig.account.legalName,
    type: input.type || appConfig.account.type,
    email: input.email || appConfig.account.email,
    phone: input.phone || appConfig.account.phone,
    website: input.website || appConfig.account.website,
    address: input.address || appConfig.account.address,
    updatedAt: Date.now(),
  } satisfies OrganizationProfile;
}
