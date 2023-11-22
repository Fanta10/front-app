import { Component, OnInit } from '@angular/core';
import { Rex } from '../../../models/rex';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FonctionRexService } from '../../../services/fonction-rex.service';

@Component({
  selector: 'app-createrex',
  templateUrl: './createrex.component.html',
  styleUrls: ['./createrex.component.css']
})
export class CreaterexComponent implements OnInit{
  mat : Rex[] = [];
  //rexp : Rex[] = [];
  myFormenv! : FormGroup;

  constructor( private fb : FormBuilder,
  private mats : FonctionRexService){}

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

  save(){
    if(this.myFormenv.invalid){
      alert("Veuillez remplir correctement les champs");
    }
    else{
      this.mats.setMat(this.myFormenv.value).subscribe({
        next : data => {
          console.log(data);
          //alert("succes")
          window.location.reload();


        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });
      console.log(this.myFormenv.value)
    }
  }

}


