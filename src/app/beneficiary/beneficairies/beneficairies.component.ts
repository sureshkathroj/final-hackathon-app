import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

const DATA: Card[] = [
  {
    title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
    title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
     title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
     title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
    title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
    title: 'Shiba Inu 6',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
   title: 'Suresh',
    subtitle: '12365478954789',
    text: 'ING bank'
  },
  {
    title: 'Shiba Inu 8',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 9',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 10',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  }
];

@Component({
  selector: 'app-beneficairies',
  templateUrl: './beneficairies.component.html',
  styleUrls: ['./beneficairies.component.scss']
})
export class BeneficairiesComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

}
