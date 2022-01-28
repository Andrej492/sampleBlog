import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService implements OnInit{
  isAuthenticated = new Subject<boolean>();

  ngOnInit(): void {

  }

  getAuthStatus() {
    return this.isAuthenticated;
  }
}
