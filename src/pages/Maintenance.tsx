
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Truck,
  Plus,
  FileText,
  BarChart
} from 'lucide-react';

interface MaintenanceTask {
  id: string;
  vehicle: string;
  type: 'preventive' | 'corrective' | 'inspection';
  description: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string;
  scheduledDate: string;
  estimatedDuration: string;
}

const maintenanceTasks: MaintenanceTask[] = [
  {
    id: "MT-3045",
    vehicle: "TL-3045",
    type: "preventive",
    description: "Révision des 50 000 km",
    status: "planned",
    priority: "medium",
    assignedTo: "Martin Dupuis",
    scheduledDate: "16/08/2023",
    estimatedDuration: "3h"
  },
  {
    id: "MT-2189",
    vehicle: "TL-2189",
    type: "corrective",
    description: "Remplacement plaquettes de frein",
    status: "in-progress",
    priority: "high",
    assignedTo: "Lucas Moreau",
    scheduledDate: "14/08/2023",
    estimatedDuration: "2h"
  },
  {
    id: "MT-4023",
    vehicle: "TL-4023",
    type: "corrective",
    description: "Réparation système hydraulique",
    status: "in-progress",
    priority: "urgent",
    assignedTo: "Martin Dupuis",
    scheduledDate: "13/08/2023",
    estimatedDuration: "8h"
  },
  {
    id: "MT-5632",
    vehicle: "TL-5632",
    type: "inspection",
    description: "Contrôle technique annuel",
    status: "completed",
    priority: "medium",
    assignedTo: "Philippe Girard",
    scheduledDate: "10/08/2023",
    estimatedDuration: "4h"
  },
  {
    id: "MT-1764",
    vehicle: "TL-1764",
    type: "preventive",
    description: "Vidange et remplacement filtres",
    status: "delayed",
    priority: "medium",
    assignedTo: "Lucas Moreau",
    scheduledDate: "09/08/2023",
    estimatedDuration: "2h"
  }
];

const statusConfig = {
  'planned': { 
    label: 'Planifiée', 
    className: 'bg-blue-500' 
  },
  'in-progress': { 
    label: 'En cours', 
    className: 'bg-amber-500' 
  },
  'completed': { 
    label: 'Terminée', 
    className: 'bg-green-500' 
  },
  'delayed': { 
    label: 'Retardée', 
    className: 'bg-red-500' 
  }
};

const priorityConfig = {
  'low': { 
    label: 'Basse', 
    className: 'border-gray-500 text-gray-600' 
  },
  'medium': { 
    label: 'Moyenne', 
    className: 'border-blue-500 text-blue-600' 
  },
  'high': { 
    label: 'Haute', 
    className: 'border-amber-500 text-amber-600' 
  },
  'urgent': { 
    label: 'Urgente', 
    className: 'border-red-500 text-red-600' 
  }
};

const typeConfig = {
  'preventive': { 
    label: 'Préventive', 
    className: 'bg-blue-100 text-blue-800' 
  },
  'corrective': { 
    label: 'Corrective', 
    className: 'bg-amber-100 text-amber-800' 
  },
  'inspection': { 
    label: 'Inspection', 
    className: 'bg-green-100 text-green-800' 
  }
};

const Maintenance: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Maintenance des véhicules</h1>
        <p className="text-muted-foreground">Suivez et gérez les opérations de maintenance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tâches planifiées</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Calendar className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En cours</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="rounded-full bg-amber-100 p-3 text-amber-600">
                <Wrench className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Terminées (ce mois)</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Retardées</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="rounded-full bg-red-100 p-3 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Tâches de maintenance</CardTitle>
              <CardDescription>Suivi des interventions sur les véhicules</CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              <span>Nouvelle tâche</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="planned">Planifiées</TabsTrigger>
              <TabsTrigger value="in-progress">En cours</TabsTrigger>
              <TabsTrigger value="completed">Terminées</TabsTrigger>
              <TabsTrigger value="delayed">Retardées</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="m-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Véhicule</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Priorité</TableHead>
                      <TableHead>Assigné à</TableHead>
                      <TableHead>Date prévue</TableHead>
                      <TableHead>Durée estimée</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.vehicle}</TableCell>
                        <TableCell>
                          <Badge className={typeConfig[task.type].className}>
                            {typeConfig[task.type].label}
                          </Badge>
                        </TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>
                          <Badge className={statusConfig[task.status].className}>
                            {statusConfig[task.status].label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={priorityConfig[task.priority].className}>
                            {priorityConfig[task.priority].label}
                          </Badge>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell>{task.scheduledDate}</TableCell>
                        <TableCell>{task.estimatedDuration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="planned" className="m-0">
              <div className="text-center p-6">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Tâches planifiées</h3>
                <p className="text-muted-foreground">Liste des interventions planifiées mais pas encore commencées.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="in-progress" className="m-0">
              <div className="text-center p-6">
                <Wrench className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Tâches en cours</h3>
                <p className="text-muted-foreground">Liste des interventions actuellement en cours de réalisation.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="m-0">
              <div className="text-center p-6">
                <CheckCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Tâches terminées</h3>
                <p className="text-muted-foreground">Liste des interventions terminées avec succès.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="delayed" className="m-0">
              <div className="text-center p-6">
                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Tâches retardées</h3>
                <p className="text-muted-foreground">Liste des interventions qui ont pris du retard.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Indicateurs de performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6">
              <BarChart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Statistiques de maintenance</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Analysez les temps d'intervention, coûts et performances de l'équipe maintenance.
              </p>
              <Button>Voir les statistiques</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentation technique</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Fiches techniques</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Accédez aux manuels, procédures et documentation technique de tous vos véhicules.
              </p>
              <Button>Consulter les documents</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Maintenance;

