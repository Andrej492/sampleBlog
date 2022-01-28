import { CognitoUserInterface, AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(
    private ref: ChangeDetectorRef,
    private authService: AuthService) {}

  ngOnInit(): void {
    onAuthUIStateChange((resAuthState, resAuthData) => {
      this.authState = resAuthState;
      this.user = resAuthData as CognitoUserInterface;
      this.ref.detectChanges();
    }
    );
  }

  ngOnDestroy() {
      return onAuthUIStateChange;
  }

}
