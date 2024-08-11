import { AdminACEDashbordComponent } from './pages/admin-ace-dashbord/admin-ace-dashbord.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthAdminGuard } from './core/guard/auth-admin.guard';
import { NavigationPanelComponent } from './layouts/navigation-panel/navigation-panel.component';
import { Component } from '@angular/core';
import { SecurityVisitorLogComponent } from './pages/security-visitor-log/security-visitor-log.component';
import { ReportTableComponent } from './pages/reports/components/report-table/report-table.component';
import { VisitorFormComponent } from './pages/visitor-form/visitor-form.component';
import { AuthSecurityGuard } from './core/guard/auth-security.guard';
import { AuthAceGuard } from './core/guard/auth-ace.guard';
import { AccessGuard } from './core/guard/access.guard';
import { Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AddroleComponent } from './ui/addrole/addrole.component';
import { EditroleComponent } from './ui/editrole/editrole.component';
import { AdminViewIndividualUserComponent } from './pages/admin-panel/user-management/components/admin-view-individual-user/admin-view-individual-user.component';
import { AdminVisitPurposeTableComponent } from './pages/admin-panel/visit-purpose-management/admin-visit-purpose-table/admin-visit-purpose-table.component';
import { AdminViewRoleComponent } from './pages/admin-panel/role-management/admin-view-role/admin-view-role.component';
import { VisitorConsentModalComponent } from './ui/visitor-consent-modal/visitor-consent-modal.component';
import { AdminAddUserComponent } from './pages/admin-panel/user-management/components/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './pages/admin-panel/user-management/components/admin-edit-user/admin-edit-user.component';
export const routes: Routes = [
  {
    path: 'vms',
    component: NavigationPanelComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminACEDashbordComponent,
        canActivate: [AuthAceGuard]
      },
      {
        path: 'visitor-log',
        component: SecurityVisitorLogComponent,
        canActivate: [AuthSecurityGuard],
      },
      {
        path: 'reports',
        component: ReportTableComponent,
        canActivate: [AuthAdminGuard],
      },
      {
        path: 'admin-panel',
        component: AdminPanelComponent,
        canActivate: [AuthAdminGuard],
      },
      {
        path:'admin-panel/view-user',
        component:AdminViewIndividualUserComponent
      },
      {
        path:'admin-panel/add-user', component: AdminAddUserComponent
      },
      {
        path:'admin-panel/edit-user', component: AdminEditUserComponent
      },
      {
        path:'sharedtable',component:AdminViewRoleComponent
      },
      {
          path:'admin-panel/add-role',component:AddroleComponent
      },
      { path: 'edit-role', component: EditroleComponent },
      {
        path:'visit-purpose',component: AdminVisitPurposeTableComponent
      },

    ],
  },
  {
    path: 'welcomepage',
    component: WelcomepageComponent,
  },
  {
    path: 'visitorform',
    component: VisitorFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  }
]





    
   
    
    

