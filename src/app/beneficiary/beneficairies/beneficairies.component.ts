import { RestApiService } from './../../helpers/rest-api.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

export interface Favourities {
  id: number;
  accountnumber: string;
  name: string;
  bank: string;
}

// const DATA: Card[] = [
//   {
//     title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//     title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//      title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//      title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//     title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//     title: 'Shiba Inu 6',
//     subtitle: 'Dog Breed',
//     text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
//   },
//   {
//    title: 'Suresh',
//     subtitle: '12365478954789',
//     text: 'ING bank'
//   },
//   {
//     title: 'Shiba Inu 8',
//     subtitle: 'Dog Breed',
//     text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
//   },
//   {
//     title: 'Shiba Inu 9',
//     subtitle: 'Dog Breed',
//     text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
//   },
//   {
//     title: 'Shiba Inu 10',
//     subtitle: 'Dog Breed',
//     text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
//   }
// ];

@Component({
  selector: 'app-beneficairies',
  templateUrl: './beneficairies.component.html',
  styleUrls: ['./beneficairies.component.scss']
})
export class BeneficairiesComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs: Observable<any> | undefined;
  ELEMENT_DATA: Favourities[] = [];
  dataSource: MatTableDataSource<Favourities> = new MatTableDataSource<Favourities>(this.ELEMENT_DATA);
  constructor(private changeDetectorRef: ChangeDetectorRef, private _service:RestApiService) { }

  ngOnInit(): void {
    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
    this.getFavourities();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  getFavourities () {
    this._service.getFavourites().subscribe((data:any) => {

      this.dataSource.data = data;

      this.dataSource.paginator = this.paginator;

      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      return data;
    });
  }

}
