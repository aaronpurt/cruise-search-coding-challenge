import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  text: string;
}

@Component({
  selector: "app-taxes",
  templateUrl: "./taxes.component.html",
  styleUrls: ["./taxes.component.sass"]
})
export class TaxesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "80%",
      height: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: "modal-example",
  templateUrl: "modal-example.html"
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
