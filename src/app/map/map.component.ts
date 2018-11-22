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
    const dialogRef = this.dialog.open(MapModalComponent, {
      width: "80%",
      height: "80%"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: "map-modal",
  templateUrl: "map-modal.html"
})
export class MapModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MapModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
