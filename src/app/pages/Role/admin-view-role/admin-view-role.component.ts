import { Component, signal, TemplateRef, ViewChild } from '@angular/core';
import { TableComponent } from "../../../shared-components/table/table.component";
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { NavigationExtras, Router } from '@angular/router';
import { RoleService } from '../../../services/role.service';
import { RoleOverview } from '../../../Models/RoleOverview.interface';
import { EditroleComponent } from '../../../ui/editrole/editrole.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-admin-view-role',
  standalone: true,
  imports: [NgIf,TableComponent, ButtonModule, ConfirmDialogModule, TooltipModule, ToastModule, EditroleComponent],
  providers: [ConfirmationService, MessageService],

  templateUrl: './admin-view-role.component.html',
  styleUrl: './admin-view-role.component.scss'
})
export class AdminViewRoleComponent {
  roleDataSource: RoleOverview[] = [];
  columnsToDisplay: any[] = [
    { header: 'Role Name', field: 'name' },
    // { header: 'Created By', field: 'createdBy' },
    { header: 'Created Date', field: 'createdDate' },
    { header: 'Actions', field: 'actions' }
  ];
  rows: number = 5;
  totalItems!: number;
  actionsTemplate!: TemplateRef<any> | null;
  summaryTemplate!: TemplateRef<any> | null;
  showEditRole: boolean = false; // Flag to toggle edit role component visibility

  selectedRoleId = signal<number | null>(null);

  constructor(private roleService: RoleService, private router: Router,
    private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.loadAllRoles();
    this.checkForMessage();

  }
  checkForMessage() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const message = navigation.extras.state['message'];
      if (message) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
      }
    }
  }

  loadAllRoles(): void {
    this.roleService.getAllRoles().subscribe((response:any) => {
      console.log('Role Response:', response);
      this.roleDataSource = response.$values || []; // Extract $values array
      this.totalItems = response.length;
      
    });
  }

  viewOrEdit(role: any): void {
    this.selectedRoleId.set(role.id);
    
    const navigationExtras: NavigationExtras = {
      state: { roleId: role.id }
    };

    this.router.navigate(['/editrole'], navigationExtras);
  }

  deleteRole(role: any, event: Event) {
    const roleId = role.roleId;
    console.log(role.id);
    
    console.log('Delete role with ID:', role.id);

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        this.roleService.deleteRole(role.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmed',
              detail: 'Role deleted'
            });
            this.loadAllRoles();
          },
          error: error => console.error('Error deleting role:', error)
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  addRole(): void {
    this.router.navigate(['/addrole']);
  }

  // onEditRoleComplete(): void {
  //   this.showEditRole = false; // Hide the edit role component after completion
  //   this.loadAllRoles(); // Reload roles to reflect any updates
  // }
}
