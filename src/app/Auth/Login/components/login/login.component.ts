import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { User } from '../../models/user';
import { FonctionLoginService } from '../../service/fonction-login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { finalize } from 'rxjs';
import { Utilisateur } from 'src/app/shared/models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  currentUser: Utilisateur | null = null;
	jwtToken: string | undefined;

  // form: ICredential = {
  //   email: '',
  //   password: ''
  // }
  myForm! : FormGroup;
  user! : User
  submitted = false;
  constructor(private route: Router, private fb: FormBuilder,
    private authService1: FonctionLoginService,    private tokenService: TokenService,  private authService: AuthService,){}

  ngOnInit(): void {



    this.myForm = this.fb.group({

      email:['', [Validators.required, Validators.email]],
      password : ['', Validators.required]


      })
  }

  get f() {
    return this.myForm.controls;
  }

  // onSubmit(): void{
  //   console.log(this.form)
  //   this.authService.login(this.form).subscribe(
  //     data => {
  //       console.log(data.access_token)
  //       this.tokenService.saveToken(data.access_token)
  //     },
  //     err => console.log(err)
  //   )
  // }


  auth() {
    // let email = this.myForm.value.email;
    // let pwd = this.myForm.value.password;
    // this.authService.login(email,pwd).subscribe({
    //   next : data => {
    //     console.log(data)
    //     this.route.navigate(['/dashboard'])
    //   },
    //   error : err =>{
    //     console.log(err)

    //   }
    // })
    this.submitted = true;
    console.log(this.myForm.value)
  //   const credentials = { /* Les données de connexion, par exemple, username et password */

  //  };

    this.authService1.login(this.myForm.value).subscribe({
      next : data => {
        // Gérer la réponse réussie du serveur*
        let responseData;
    try {
      responseData = data.token ;
      console.log(responseData)
      // Vous pouvez maintenant stocker le token, par exemple dans le stockage local
      //localStorage.setItem('token', responseData);
      this.tokenService.saveToken(data.token)
      this.route.navigate(['/dashboard'])
    } catch (e) {
      console.error('Erreur lors de l\'analyse JSON de la réponse :', e);

      // Gérer l'erreur de parsing JSON
      return;
    }

    // Traiter la réponse réussie du serveur (responseData)
    //console.log('Réponse du serveur :', responseData);

        console.log('Token généré avec succès', data);
      },
      error : error => {
        // Gérer les erreurs de la requête
        console.error('Erreur lors de la génération du token', error);
      }
  });


   }
   //deb
  //  login() {
  //   console.log(this.myForm.value);
  //   this.authService.login2(this.myForm.value).subscribe((response) => {
  //     console.log(response);
  //     if (response.jwtToken) {
  //       alert(response.jwtToken);
  //       const jwtToken = response.jwtToken;
  //       localStorage.setItem('JWT', jwtToken);
  //       this.route.navigateByUrl('/dashboard');
  //     }
  //   })
  //}

  // login(): void {
  //   const credentials = {
  //     // Vos informations d'authentification
  //   };

  //   this.authService.login(this.myForm.value).subscribe(response => {
  //     const token = response.access_token;
  //     localStorage.setItem('access_token', token);
  //     this.route.navigate(['/dashboard'])
  //   });
  // }


  connexion(): void {
    

    if (!this.myForm.invalid) {

      this.authService.authentifier(this.myForm.getRawValue())
        .pipe(
          finalize(() => {})
        )
        .subscribe((value) => {
          localStorage.removeItem("token");
          this.jwtToken = value.token;
          this.authService.enregistrerToken(this.jwtToken);
          this.currentUser = this.authService.getUtilisateurConnecte();
          this.route.navigate(['/dashboard'])
        },
        (error) => {
          console.error('Erreur lors de l\'analyse JSON de la réponse :', error);

          // Gérer l'erreur de parsing JSON
          return;
        }
        );
      }
    }

}
