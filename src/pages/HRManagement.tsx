
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  CalendarClock, 
  FileCheck, 
  FileWarning, 
  FileClock,
  Clock,
  UserCheck,
  Users,
  FileEdit,
  UserX,
  PlusCircle
} from 'lucide-react';
import AddDriverForm from '@/components/hr/AddDriverForm';
import HRCalendar from '@/components/hr/HRCalendar';
import DocumentManager from '@/components/hr/DocumentManager';
import AttendanceSystem from '@/components/hr/AttendanceSystem';
import { toast } from "sonner";

interface Driver {
  id: number;
  fullName: string;
  status: "active" | "off-duty" | "sick-leave" | "vacation";
  experience: string;
  vehicles: string[];
  documents: number;
}

const HRManagement: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([
    { 
      id: 1, 
      fullName: "Thomas Durand", 
      status: "active", 
      experience: "5 ans", 
      vehicles: ["TL-3045", "TL-1203"],
      documents: 90
    },
    { 
      id: 2, 
      fullName: "Sophie Lefèvre", 
      status: "active", 
      experience: "3 ans", 
      vehicles: ["TL-2189"],
      documents: 100
    },
    { 
      id: 3, 
      fullName: "Pierre Martin", 
      status: "off-duty", 
      experience: "7 ans", 
      vehicles: ["TL-1203", "TL-4023"],
      documents: 75
    }
  ]);
  
  const [openAddDriver, setOpenAddDriver] = useState(false);
  const [selectedTab, setSelectedTab] = useState("drivers");

  const handleAddDriver = (driverData: any) => {
    const newDriver: Driver = {
      id: drivers.length + 1,
      fullName: driverData.fullName,
      status: driverData.status,
      experience: driverData.experience,
      vehicles: [],
      documents: 0
    };
    
    setDrivers(prev => [...prev, newDriver]);
    toast.success(`${driverData.fullName} a été ajouté avec succès`);
  };
  
  const handleScheduleRequest = () => {
    toast.success("Demande de congés envoyée avec succès");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Ressources Humaines</h1>
        <p className="text-muted-foreground">Gestion des chauffeurs et des employés</p>
      </div>

      <Tabs defaultValue="drivers" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="drivers" className="flex items-center gap-1">
            <Users size={16} />
            <span>Chauffeurs</span>
          </TabsTrigger>
          <TabsTrigger value="availability" className="flex items-center gap-1">
            <CalendarClock size={16} />
            <span>Disponibilités</span>
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-1">
            <FileCheck size={16} />
            <span>Documents</span>
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center gap-1">
            <Clock size={16} />
            <span>Pointage</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drivers">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Chauffeurs</CardTitle>
                <Button className="flex items-center gap-1" onClick={() => setOpenAddDriver(true)}>
                  <PlusCircle size={16} />
                  <span>Ajouter un chauffeur</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Expérience</TableHead>
                      <TableHead>Véhicules assignés</TableHead>
                      <TableHead>Documents valides</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drivers.map((driver) => (
                      <TableRow key={driver.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{driver.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{driver.fullName}</div>
                              <div className="text-xs text-muted-foreground">{driver.experience} d'expérience</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={driver.status === "active" ? "default" : "secondary"}>
                            {driver.status === "active" ? "Actif" : "Hors service"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>{driver.experience}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {driver.vehicles.map((vehicle, idx) => (
                              <Badge key={idx} variant="outline">{vehicle}</Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={driver.documents} className="h-2 w-20" />
                            <span className="text-sm">{driver.documents}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <FileEdit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <UserX className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle>Disponibilité des chauffeurs</CardTitle>
            </CardHeader>
            <CardContent>
              <HRCalendar onSchedule={handleScheduleRequest} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Documents valides</span>
                    <span className="text-2xl font-bold">124</span>
                  </div>
                  <div className="rounded-full bg-green-100 p-3 text-green-600">
                    <FileCheck className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Documents à renouveler</span>
                    <span className="text-2xl font-bold">18</span>
                  </div>
                  <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                    <FileWarning className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Documents expirés</span>
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <div className="rounded-full bg-destructive/10 p-3 text-destructive">
                    <FileClock className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gestion des documents</CardTitle>
            </CardHeader>
            <CardContent>
              <DocumentManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Pointage et présence</CardTitle>
            </CardHeader>
            <CardContent>
              <AttendanceSystem />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <AddDriverForm 
        open={openAddDriver} 
        onOpenChange={setOpenAddDriver} 
        onAddDriver={handleAddDriver}
      />
    </div>
  );
};

export default HRManagement;
