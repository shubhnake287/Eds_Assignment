import { Component, EventEmitter, Input, Output } from '@angular/core';

import { home } from './home/models';

@Component({
  selector: 'bc-home-detail',
  template: `
  <div class="search-container">
  <span>Search</span>
  <input matInput [(ngModel)]="searchKey" placeholder="Search" autocomplete="off" (keyup)="applyFilter()">
  <button mat-button matSuffix mat-icon-button aria-label="Clear" *ngIf="searchKey" (click)="onSearchClear()">
      <mat-icon>close</mat-icon>
  </button>
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- Employee number column -->
      <ng-container matColumnDef="empNo">
          <th mat-header-cell *matHeaderCellDef> Emp No. </th>
          <td mat-cell *matCellDef="let element"> {{element.empNo}} </td>
      </ng-container>

      <!-- Employee First name column -->
      <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>First Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <!-- employee last name Column -->
      <ng-container matColumnDef="last">
          <th mat-header-cell *matHeaderCellDef> Last Name </th>
          <td mat-cell *matCellDef="let element"> {{element.last}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="employeesColumn"></tr>
      <tr mat-row *matRowDef="let row; columns: employeesColumn;"></tr>
  </table>
</div>
    `,

  styles: [
    `
        :host {
          display: flex;
          justify-content: center;
          margin: 72px 0;
        }
  
        table {
          width: 100%;
      }
      
      input#mat-input-2 {
          width: 123px;
          margin: 0px;
          background: dodgerblue;
          margin-left: 20px;
          margin-top: 20px;
          margin-bottom: 1px;
      }
      `,
  ],

})
export class homeDetailComponent {

  /**
   * Useed to display column on grid.
   * @type {string[]}
   * @memberof HomePageComponent
   */
  displayedColumns: string[] = ['empNo', 'name', 'last'];

  /**
   * Used for loading data.
   * @type {*}
   * @memberof HomePageComponent
   */
  dataSource: any

  constructor(private homeService: IndexService) { }

  /**
   * Used for column names.
   * @type {string[]}
   * @memberof HomePageComponent
   */
  employeesColumn: string[] = ['empNo', 'name', 'last'];

  /**
   * Used fro employee array.
   * @type {Employees[]}
   * @memberof HomePageComponent
   */
  employees: Employees[] = [];

  /**
   * variables used for search key.
   * @type {*}
   * @memberof HomePageComponent
   */
  searchKey: any;

  ngOnInit(): void {
    //Used for subscribe and getting the values from json.
    this.homeService.getEmployees().subscribe(res => {
      this.employees = res;
      this.dataSource = new MatTableDataSource(this.employees);
    })
  }

  /**
   * Method used for search on input field.
   * @memberof HomePageComponent
   */
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  /**
   * Method used for search field.
   * @memberof HomePageComponent
   */
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
