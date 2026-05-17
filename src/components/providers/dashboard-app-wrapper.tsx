"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { Topbar } from "@/components/layout/topbar";
import { ToastProvider } from "@/components/ui/toast";
import { AccountProvider } from "@/domains/auth";
import { markAppPerformance } from "@/lib/utils/performance";
import { templateConfig } from "@/template-config";

export function DashboardAppWrapper({ children }: { children: ReactNode }) {
  return (
    <AccountProvider>
      <DashboardAuthenticatedShell>{children}</DashboardAuthenticatedShell>
    </AccountProvider>
  );
}

function DashboardAuthenticatedShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    markAppPerformance("shell:ready", { workspaceStatus: "demo" });
    markAppPerformance("workspace:ready", { organizationId: templateConfig.demoOrganizationId });
  }, []);

  return (
    <ToastProvider>
      <SidebarProvider>
        <div className="flex h-full overflow-hidden bg-background text-text-primary">
          <div className="hidden h-full lg:flex">
            <Sidebar />
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-surface">
            <Topbar />
            <main className="flex-1 overflow-y-auto outline-none">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </ToastProvider>
  );
}
