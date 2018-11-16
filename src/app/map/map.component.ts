import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"]
})
export class MapComponent {
  constructor(public dialog: MatDialog) {}

  openMapModal(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "80%",
      height: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: "map-modal",
  templateUrl: "map-modal.html"
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
