import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/features/auth/components/login-form";
import { RegisterForm } from "@/features/auth/components/register-form";
import Image from "next/image";
import logo from "@/public/nutra-logo.svg";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12">
        <div className="flex flex-col items-center text-center mb-2">
          <div className="relative flex items-center justify-center">
            <Image
              src={logo}
              alt="Nutra Logo"
              width={50}
              height={50}
              className="flex items-center justify-center"
            />
            <p className="text-primary font-bold text-2xl">Nutra</p>
          </div>
        </div>

        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Masuk</TabsTrigger>
                <TabsTrigger value="register">Daftar</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="register">
                <Tabs defaultValue="create-unit">
                  {/* <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="create-unit">Buat Unit</TabsTrigger>
                    <TabsTrigger value="join-unit">Gabung Unit</TabsTrigger>
                  </TabsList> */}
                  <RegisterForm />
                  {/* <TabsContent value="create-unit">
                    <RegisterForm />
                    <CreateUnitForm />
                  </TabsContent>
                  <TabsContent value="join-unit">
                    <RegisterForm />
                    <JoinUnitForm />
                  </TabsContent> */}
                </Tabs>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Nutra. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </main>
  );
}
