import { Observable } from 'rxjs';
import { AttendanceRecord, AttendanceUpdate } from '../../interfaces/IAttendance';

export abstract class AttendanceDataSource {
  abstract getAll(): Observable<AttendanceRecord[]>;
  abstract upsert(record: AttendanceUpdate): Observable<void>;
}
