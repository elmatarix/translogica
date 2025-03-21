
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UsersTable from '@/components/users/UsersTable';
import AddUserForm from '@/components/users/AddUserForm';
import { useAuth } from '@/hooks/useAuth';
import { Plus, Search } from 'lucide-react';

const UserManagement: React.FC = () => {
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const { addUser, hasActionPermission } = useAuth();

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des utilisateurs</h1>
          <p className="text-muted-foreground">
            Gérez les comptes utilisateurs et leurs permissions d'accès.
          </p>
        </div>
        {hasActionPermission('add-user') && (
          <Button onClick={() => setAddUserDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nouvel utilisateur
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <Card className="w-full">
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <CardTitle>Utilisateurs</CardTitle>
                  <CardDescription>Liste de tous les utilisateurs enregistrés</CardDescription>
                </div>
                <div className="w-full md:w-auto mt-2 md:mt-0">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Rechercher..."
                      className="w-full md:w-[250px] pl-8"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  <TabsTrigger value="admin">Administrateurs</TabsTrigger>
                  <TabsTrigger value="staff">Opérationnels</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                  <UsersTable />
                </TabsContent>
                <TabsContent value="admin" className="m-0">
                  <UsersTable />
                </TabsContent>
                <TabsContent value="staff" className="m-0">
                  <UsersTable />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
              <CardDescription>Vue d'ensemble des utilisateurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total des utilisateurs</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Administrateurs</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ressources Humaines</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Planificateurs</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Commerciaux</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Approvisionneurs</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Exploitation</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maintenance</span>
                  <span className="font-medium">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AddUserForm
        open={addUserDialogOpen}
        onOpenChange={setAddUserDialogOpen}
        onAddUser={addUser}
      />
    </div>
  );
};

export default UserManagement;
