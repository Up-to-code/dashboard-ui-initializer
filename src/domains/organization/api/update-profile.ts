import { templateConfig } from "@/template-config";
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
    name: input.name || templateConfig.account.name,
    legalName: input.legalName || templateConfig.account.legalName,
    type: input.type || templateConfig.account.type,
    email: input.email || templateConfig.account.email,
    phone: input.phone || templateConfig.account.phone,
    website: input.website || templateConfig.account.website,
    address: input.address || templateConfig.account.address,
    updatedAt: Date.now(),
  } satisfies OrganizationProfile;
}
