import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FonctionRexService } from '../../../services/fonction-rex.service';
import { Rex } from '../../../models/rex';

@Component({
  selector: 'app-editrex',
  templateUrl: './editrex.component.html',
  styleUrls: ['./editrex.component.css']
})
export class EditrexComponent implements OnInit{
  mat! : Rex;
  //rexp : Rex[] = [];
  myFormenv! : FormGroup;

  constructor( private fb : FormBuilder,
  private mats : FonctionRexService ){}

  ngOnInit(): void {

    this.myFormenv = this.fb.group({

      nom:['', Validators.required],
      prenom:['', Validators.required],
      fonction:['', Validators.required],


      })

      // this.rex.getRex().subscribe((donnees : any) => {
      //   this.rexp = donnees;
      //   console.log(donnees)


    //})


  }

  chargeData(rex: Rex){
    // if(this.myFormenv.invalid){
    //   alert("Veuillez remplir correctement les champs");
    // }
    // else{
    //   this.mats.updateMateriel(this.myFormenv.value).subscribe({
    //     next : data => {
    //       console.log(data);
    //       alert("succes")
    //       window.location.reload();


    //     },
    //     error : error => {
    //       console.log(error)
    //       alert("error")
    //     }
    //   });
    //   console.log(this.myFormenv.value)
    // }
    this.mat = rex;
    this.myFormenv.patchValue({
      nom: rex.nom,
      prenom: rex.prenom,
      fonction: rex.fonction
    });

  }

  // edits(){
  //      if(this.myFormenv.invalid){
  //     alert("Veuillez remplir correctement les champs");
  //   }
  //   else{
  //     this.mats.updateMateriel(this.myFormenv.value).subscribe({
  //       next : data => {
  //         console.log(data);
  //         alert("succes")
  //         window.location.reload();


  //       },
  //       error : error => {
  //         console.log(error)
  //         alert("error")
  //       }
  //     });
  //     console.log(this.myFormenv.value)
  //   }
  // }



}
