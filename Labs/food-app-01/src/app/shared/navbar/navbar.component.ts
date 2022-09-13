import { Component, OnInit } from "@angular/core";
import { NavbarService } from "./navbar.service";
import { NavItem } from "./nav-item.model";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private ns: NavbarService) {}

  rootRoutes!: Route[];
  navItems: NavItem[] = [];

  ngOnInit() {
    this.ns.getItems().subscribe((data) => {
      this.navItems = data;
    });
  }
}
