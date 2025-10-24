"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/features/auth/actions/auth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function UserNav() {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch("/api/user");

      if (!res.ok) {
        throw new Error("Gagal mengambil data profil");
      }

      return res.json();
    },
  });
  const handleLogout = () => {
    logoutAction();
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/150?img=9" alt="@user" />
            <AvatarFallback className="bg-primary/10 text-primary">
              US
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
