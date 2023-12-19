
import { Injectable, ViewContainerRef, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { CameraDialogComponent } from '../component/camera-dialog/camera-dialog.component';

@Injectable()
export class CameraService {

    constructor(private dialog: MatDialog, @Inject(DOCUMENT) doc: any) {
    }


    public capture(titleAlign: string = 'center'): Observable<any> {

        let dialogRef: MatDialogRef<CameraDialogComponent>;
        const config = new MatDialogConfig();
        dialogRef = this.dialog.open(CameraDialogComponent, config);
        dialogRef.componentInstance.capture = true;
        dialogRef.componentInstance.imageCode = false;
         return dialogRef.afterClosed();
    }

    public viewImage(benImageCode: string, titleAlign: string = 'center'): void {

        let dialogRef: MatDialogRef<CameraDialogComponent>;
        const config = new MatDialogConfig();
        dialogRef = this.dialog.open(CameraDialogComponent, config);
        dialogRef.componentInstance.capture = false;
        dialogRef.componentInstance.imageCode = benImageCode;

    }

    public annotate(image: string, points: any, titleAlign: string = 'center'): Observable<any> {

        let dialogRef: MatDialogRef<CameraDialogComponent>;
        const config = new MatDialogConfig();
        dialogRef = this.dialog.open(CameraDialogComponent, {
            width: '80%'
        });
        dialogRef.componentInstance.capture = false;
        dialogRef.componentInstance.imageCode = false;
        dialogRef.componentInstance.annotate = image;
        dialogRef.componentInstance.availablePoints = points;
        return dialogRef.afterClosed();

    }

    public ViewGraph(graph: any): void {
        let dialogRef: MatDialogRef<CameraDialogComponent>;
        const config = new MatDialogConfig();
        dialogRef = this.dialog.open(CameraDialogComponent, {
            width: '80%',
        });
        dialogRef.componentInstance.capture = false;
        dialogRef.componentInstance.imageCode = false;
        dialogRef.componentInstance.annotate = false;
        dialogRef.componentInstance.availablePoints = false;
        dialogRef.componentInstance.graph = graph;
    }
    public close(): void {
    }

}
