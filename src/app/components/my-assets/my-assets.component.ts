import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from 'src/app/models/owner.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})
export class MyAssetsComponent implements OnInit, AfterViewInit  {
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showForm:boolean;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel="פריטים לעמוד";
    this.paginator._intl.firstPageLabel="מתוך";
    this.paginator._intl.lastPageLabel="מתוך";
    this.paginator._intl.nextPageLabel="מתוך";
    this.paginator._intl.previousPageLabel="מתוך";
    console.log(this.paginator._intl.getRangeLabel);
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    let res = this.repoService.getData('api/owner')
   // .subscribe(res => {
       this.dataSource.data = res as Owner[];
    // })
    
  }
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openForm(){
    this.showForm = true;
  }
}
