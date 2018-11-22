import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-lowest-option",
  templateUrl: "./lowest-option.component.html",
  styleUrls: ["./lowest-option.component.sass"]
})
export class LowestOptionComponent implements OnInit {
  @Input() lowestOption;

  constructor() {}

  ngOnInit() {}
}
