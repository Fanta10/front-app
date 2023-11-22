
import { AuthService } from "../../services/auth.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const canActivate = () => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if (authService.isAuthenticated()) {
    return true;
  } else {
    return router.parseUrl('/dashboard');
  }
}
