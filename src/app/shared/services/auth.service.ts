import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {URLS} from "../urls";
import {JwtHelperService} from "@auth0/angular-jwt";
import { Token } from '../models/token';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private jwtToken!: string | undefined;

	constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
	}

	/**
	 * Authentifie un utilisateur.
	 *
	 * @param credentials les accès de l'utilisateur.
	 */
	authentifier(credentials: any): Observable<Token> {
    
		return this.http.post<Token>(URLS.connexion, credentials);
	}

	/**
	 * Cette méthode permet d'enregistrer le token dans le localStorage après l'authentification
	 * @param jwtToken
	 */
	enregistrerToken(jwtToken: string | undefined): void {
		this.jwtToken = jwtToken;
		if (typeof jwtToken === "string") {
			localStorage.setItem('token', jwtToken);
		}
	}

	/**
	 * Cette méthode permet de recuperer le token dans le localStorage après l'authentification
	 * @return any
	 */
	recupererToken(): string {
		const token = localStorage.getItem('token');
		return token ? token : '';
	}

	/**
	 * Retourne ture si un utilisateur est authentifié.
	 */
	isAuthenticated(): boolean {
		const token = this.recupererToken();
		if (token) {
			let data = this.jwtHelper.decodeToken(token);
			return (!this.jwtHelper.isTokenExpired(token) && !data.mot_de_passe_a_reinitialiser);
		}
		return false;
	}

	/**
	 * Recupère l'utilisateur à partir du token jwt.
	 */
	getUtilisateurConnecte(): Utilisateur | null {
		if (this.isAuthenticated()) {
			return this.decoderToken(this.recupererToken());
		}
		return null;
	}

	/**
	 * Recupère l'utilisateur à partir du token jwt sans enreg token in local.
	 */
	getUtilisateurConnecteByTokenHot(token: string | undefined): Utilisateur | null {
		if (token != null && token != '') {
			return this.decoderToken(token);
		}
		return null;
	}

	/**
	 * Décode le jwt token.
	 *
	 * @param jwtToken le token jwt.
	 */
	decoderToken(jwtToken: string) {
		const token = this.jwtHelper.decodeToken(jwtToken);
		const utilisateur = new Utilisateur();
		utilisateur.id = token.id;
		utilisateur.nom = token.nom;
		utilisateur.prenom = token.prenoms;
		utilisateur.email = token.username;
		utilisateur.password = token.role;


		return utilisateur;


	}
}
