import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordCategory, RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  records$!: Observable<RecordCategory[]>;

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {
    this.records$ = this.recordsService.getRecords();
  }
}
