import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "LeFinance",
  description: "#1 Stock Exchange App in Mauritius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`neutral-sans antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main className="p-4">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
