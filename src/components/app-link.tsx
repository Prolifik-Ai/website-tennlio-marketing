import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site-config";

export function AppLink({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "secondary"; className?: string }) {
  if (!APP_URL) return <Button variant={variant} className={className} disabled title="The Tennlio app link has not been configured">{children}<ArrowUpRight /></Button>;
  return <Button variant={variant} className={className} asChild><a href={APP_URL}>{children}<ArrowUpRight /></a></Button>;
}