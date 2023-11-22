import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
//import { AuthService } from '../shared/services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-layout-costumer',
  templateUrl: './layout-costumer.component.html',
  styleUrls: ['./layout-costumer.component.css']
})
export class LayoutCostumerComponent {
  constructor(private router: Router,
    private tokenService: TokenService){

  }

  logout(){
    // this.http.request('post','http://localhost:8086/api/v1/auth/logout',{
    //   withCredentials: true
    // }).subscribe({
    //   next: () => {
    //     this.storageService.clean();
    //     this.AuthenticatedUser$.next(null);
    // Supprimer le token du localStorage
    //localStorage.removeItem('token');
    this.tokenService.clearTokenExpired();
        this.router.navigate(['/']);
      }
  //   })
  // }

}
