import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';


interface Column {
  field: string;
  header: string;
};
@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [TableModule, CommonModule, ],
  templateUrl: './report-table.component.html',
  styleUrl: './report-table.component.scss'
})

export class ReportTableComponent {

  reports: Array<{
    slNo: number,
    name: string,
    phoneNumber: string,
    visitDate: string,
    officeLocation: string,
    visitPurpose: string,
    hostName: string,
    onDutyStaff: string,
    staffContactNumber: string,
    checkIn: string,
    checkOut: string
  }> = [
    {
      slNo: 1,
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      visitDate: '2024-07-01',
      officeLocation: 'Head Office',
      visitPurpose: 'Meeting',
      hostName: 'Alice Smith',
      onDutyStaff: 'Robert Brown',
      staffContactNumber: '987-654-3210',
      checkIn: '09:00 AM',
      checkOut: '10:30 AM'
    },
    {
      slNo: 2,
      name: 'Jane Roe',
      phoneNumber: '234-567-8901',
      visitDate: '2024-07-02',
      officeLocation: 'Branch Office',
      visitPurpose: 'Interview',
      hostName: 'Michael Johnson',
      onDutyStaff: 'Emily Davis',
      staffContactNumber: '876-543-2109',
      checkIn: '10:00 AM',
      checkOut: '11:00 AM'
    },
    {
      slNo: 3,
      name: 'Richard Miles',
      phoneNumber: '345-678-9012',
      visitDate: '2024-07-03',
      officeLocation: 'Head Office',
      visitPurpose: 'Delivery',
      hostName: 'Daniel Wilson',
      onDutyStaff: 'Sophia Lee',
      staffContactNumber: '765-432-1098',
      checkIn: '11:00 AM',
      checkOut: '11:30 AM'
    },
    {
      slNo: 4,
      name: 'Emily Stone',
      phoneNumber: '456-789-0123',
      visitDate: '2024-07-04',
      officeLocation: 'Branch Office',
      visitPurpose: 'Maintenance',
      hostName: 'Oliver Harris',
      onDutyStaff: 'Liam White',
      staffContactNumber: '654-321-0987',
      checkIn: '01:00 PM',
      checkOut: '02:00 PM'
    },
    {
      slNo: 5,
      name: 'James Baker',
      phoneNumber: '567-890-1234',
      visitDate: '2024-07-05',
      officeLocation: 'Head Office',
      visitPurpose: 'Client Meeting',
      hostName: 'Lucas Martin',
      onDutyStaff: 'Mia Thompson',
      staffContactNumber: '543-210-9876',
      checkIn: '02:00 PM',
      checkOut: '03:30 PM'
    },
    {
      slNo: 6,
      name: 'Sophia Taylor',
      phoneNumber: '678-901-2345',
      visitDate: '2024-07-06',
      officeLocation: 'Branch Office',
      visitPurpose: 'Inspection',
      hostName: 'Ella Moore',
      onDutyStaff: 'Noah Anderson',
      staffContactNumber: '432-109-8765',
      checkIn: '03:00 PM',
      checkOut: '04:00 PM'
    },
    {
      slNo: 7,
      name: 'William King',
      phoneNumber: '789-012-3456',
      visitDate: '2024-07-07',
      officeLocation: 'Head Office',
      visitPurpose: 'Training',
      hostName: 'Charlotte Green',
      onDutyStaff: 'Ava Taylor',
      staffContactNumber: '321-098-7654',
      checkIn: '09:30 AM',
      checkOut: '11:30 AM'
    },
    {
      slNo: 8,
      name: 'Olivia Lee',
      phoneNumber: '890-123-4567',
      visitDate: '2024-07-08',
      officeLocation: 'Branch Office',
      visitPurpose: 'Consultation',
      hostName: 'Amelia King',
      onDutyStaff: 'Isabella Martinez',
      staffContactNumber: '210-987-6543',
      checkIn: '10:30 AM',
      checkOut: '12:00 PM'
    },
    {
      slNo: 9,
      name: 'Michael Scott',
      phoneNumber: '901-234-5678',
      visitDate: '2024-07-09',
      officeLocation: 'Head Office',
      visitPurpose: 'Audit',
      hostName: 'Benjamin Taylor',
      onDutyStaff: 'Elijah Hernandez',
      staffContactNumber: '109-876-5432',
      checkIn: '01:30 PM',
      checkOut: '03:00 PM'
    },
    {
      slNo: 10,
      name: 'Jessica Parker',
      phoneNumber: '012-345-6789',
      visitDate: '2024-07-10',
      officeLocation: 'Branch Office',
      visitPurpose: 'Seminar',
      hostName: 'Alexander Lopez',
      onDutyStaff: 'Mason Allen',
      staffContactNumber: '098-765-4321',
      checkIn: '02:30 PM',
      checkOut: '04:30 PM'
    }
  ];
  
  cols!: Column[];
  ngOnInit(): void {
    this.cols = [
      { field: 'slNo', header: 'Sl.No.' },
      { field: 'name', header: 'Name' },
      { field: 'phoneNumber', header: 'Phone Number' },
      { field: 'visitDate', header: 'Visit Date' },
      { field: 'officeLocation', header: 'Office Location' },
      { field: 'visitPurpose', header: 'Visit Purpose' },
      { field: 'hostName', header: 'Host Name' },
      { field: 'onDutyStaff', header: 'On-duty Staff' },
      { field:'staffContactNumber', header: 'Staff Contact Number' },
      { field: 'checkIn', header: 'Check-In' }, 
      { field: 'checkOut', header: 'Check-Out' }, 

  ];
  };

  isSortable(field: string): boolean {
    const sortableFields = ['name', 'visitDate','officeLocation', 'visitPurpose', 'hostName', 'onDutyStaff']; // Add all the fields you want to be sortable here
    return sortableFields.includes(field);
  }
  
  
}