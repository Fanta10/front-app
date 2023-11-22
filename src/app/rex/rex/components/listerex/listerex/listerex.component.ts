import { Component, OnInit } from '@angular/core';
import { FonctionRexService } from '../../../services/fonction-rex.service';
import { Rex } from '../../../models/rex';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listerex',
  templateUrl: './listerex.component.html',
  styleUrls: ['./listerex.component.css'],

})
export class ListerexComponent implements OnInit{
  materiels: Rex[] = [];
  // rex : Rex[] = [];
  data$!: Observable<any>; // Remplacez any par le type de vos données


  mat! : Rex;
  //rexp : Rex[] = [];
  myFormenv! : FormGroup;
  productId! : number;



  constructor(private fb : FormBuilder,private functionService : FonctionRexService,
    private route: Router,private router: ActivatedRoute){}

  ngOnInit(): void {

    //this.loadData(1, 10); // Charger la première page avec une taille de 10 items par page




    //getAllMateriel(){
      this.myFormenv = this.fb.group({

        idRex : 0,
        nom:['', Validators.required],
        prenom:['', Validators.required],
        fonction:['', Validators.required],


        })


      this.functionService.getMateriels().subscribe((response : any) => {
        this.materiels = response;
        console.log(this.materiels);

    });
    // this.router.params.subscribe(params => {
    //   this.productId = +params['id']; // Assurez-vous que 'id' correspond au nom du paramètre dans votre route
    //   // Chargez les détails du produit en utilisant productId
    //   this.loadProductDetails();
    // });


  //   getRex(idRex : number){
  //     this.functionService.getByRexId(idRex).subscribe((data : any) => {
  //       this.mat = data;
  //       console.log(this.rex);
  //     })


  //   }

  }

  // loadProductDetails() {
  //   this.functionService.getByRexId(this.productId).subscribe(product => {
  //     this.mat = product;
  //   });
  // }

  // loadData(page: number, size: number): void {
  //   this.data$ = this.functionService.getPaginatedData(page, size);
  // }


  chargeData(rex: Rex){
    this.mat = rex;
    this.myFormenv.patchValue({
      idRex: rex.idRex,
      nom: rex.nom,
      prenom: rex.prenom,
      fonction: rex.fonction
    });

  }
  delete(materiel:Rex){
    this.functionService.deleteMateriel(materiel.idRex).subscribe({
      next : data => {
        //console.log(data);
        alert("succes")
        window.location.reload();
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });


  }

  edit(){
    this.functionService.updateMateriel(this.myFormenv.value).subscribe({
      next : data1 => {
        console.log(data1);
        alert("succes")
        //console.log(data1)
        window.location.reload();
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });

  }




}
