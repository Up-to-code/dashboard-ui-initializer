"use client";

export type MediaKind = "image" | "video" | "document";
export type MediaResourceType = "project" | "property" | "client" | "calendarEvent" | "task";
export type MediaShareVisibility = "private" | "public";
export type DemoMediaAsset = {
  _id: string;
  organizationId: string;
  resourceType: MediaResourceType;
  resourceId: string;
  url: string;
  name: string;
  size: number;
  mimeType: string;
  kind: MediaKind;
  isCover?: boolean;
  shareVisibility?: MediaShareVisibility;
  createdAt: number;
};

export function inferMediaKind(mimeType: string): MediaKind {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  return "document";
}

export function useResourceMediaQuery(
  organizationId: string | undefined,
  resourceType: MediaResourceType,
  resourceId: string | undefined,
) : DemoMediaAsset[] {
  void organizationId;
  void resourceType;
  void resourceId;
  return [];
}

export function useResourceMediaFoldersQuery(
  organizationId: string | undefined,
  resourceType: MediaResourceType,
  resourceId: string | undefined,
) : Array<{ _id: string; name: string }> {
  void organizationId;
  void resourceType;
  void resourceId;
  return [];
}

async function jsonOrThrow(response: Response) {
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error ?? "Media request failed.");
  }
  return payload;
}

export async function attachUploadedMedia(params: {
  organizationId: string;
  resourceType: MediaResourceType;
  resourceId: string;
  upload: {
    key: string;
    name: string;
    size: number;
    mimeType?: string;
    type?: string;
    url?: string;
  };
  isCover?: boolean;
  folderId?: string;
}) {
  const mimeType = params.upload.mimeType ?? params.upload.type ?? "application/octet-stream";
  const url = params.upload.url;
  if (!url) throw new Error("Uploaded file did not return a URL.");

  const response = await fetch(`/api/v1/organizations/${params.organizationId}/media/attach`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      key: params.upload.key,
      url,
      name: params.upload.name,
      size: params.upload.size,
      mimeType,
      kind: inferMediaKind(mimeType),
      resourceType: params.resourceType,
      resourceId: params.resourceId,
      folderId: params.folderId,
      isCover: params.isCover,
    }),
  });
  return jsonOrThrow(response);
}

export async function uploadAndAttachMedia(params: {
  organizationId: string;
  resourceType: MediaResourceType;
  resourceId: string;
  files: File[];
  folderId?: string;
}) {
  if (params.files.length === 0) return [];

  return params.files.map((file, index) => ({
    _id: `demo-media-${Date.now()}-${index}`,
    organizationId: params.organizationId,
    resourceType: params.resourceType,
    resourceId: params.resourceId,
    url: URL.createObjectURL(file),
    name: file.name,
    size: file.size,
    mimeType: file.type,
    kind: inferMediaKind(file.type || "application/octet-stream"),
    isCover: index === 0 && file.type.startsWith("image/"),
    createdAt: Date.now(),
  }));
}

export async function setMediaCoverRequest(organizationId: string, mediaId: string) {
  const response = await fetch(`/api/v1/organizations/${organizationId}/media/${mediaId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ isCover: true }),
  });
  return jsonOrThrow(response);
}

export async function deleteMediaRequest(organizationId: string, mediaId: string) {
  const response = await fetch(`/api/v1/organizations/${organizationId}/media/${mediaId}`, {
    method: "DELETE",
  });
  return jsonOrThrow(response);
}

export async function setMediaShareVisibilityRequest(
  organizationId: string,
  mediaId: string,
  shareVisibility: MediaShareVisibility,
) {
  const response = await fetch(`/api/v1/organizations/${organizationId}/media/${mediaId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ shareVisibility }),
  });
  return jsonOrThrow(response);
}

export async function createMediaFolderRequest(params: {
  organizationId: string;
  resourceType: MediaResourceType;
  resourceId: string;
  name: string;
}) {
  const response = await fetch(`/api/v1/organizations/${params.organizationId}/media/folders`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      resourceType: params.resourceType,
      resourceId: params.resourceId,
      name: params.name,
    }),
  });
  return jsonOrThrow(response);
}

export async function deleteMediaFolderRequest(organizationId: string, folderId: string) {
  const response = await fetch(`/api/v1/organizations/${organizationId}/media/folders/${folderId}`, {
    method: "DELETE",
  });
  return jsonOrThrow(response);
}

export type MediaAssetId = string;
export type MediaFolderId = string;
