import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FonctionrexService } from '../../services/fonctionrex.service';
import { FonctionlogicielService } from '../../services/fonctionlogiciel.service';
import { Logiciel } from '../../models/logiciel';
import { Rex } from '../../models/rex';

@Component({
  selector: 'app-createlogiciel',
  templateUrl: './createlogiciel.component.html',
  styleUrls: ['./createlogiciel.component.css']
})
export class CreatelogicielComponent implements OnInit{
  mat : Logiciel[] = [];
  rexp : Rex[] = [];
  myForm! : FormGroup;

  constructor( private fb : FormBuilder,
  private rex: FonctionrexService,
  private mats : FonctionlogicielService ){}

  ngOnInit(): void {

    this.myForm = this.fb.group({

     // codeApp:['', Validators.required],
      libelleApp:['', Validators.required],
      descriptionApp:['', Validators.required],
       rex:['', Validators.required]


      })

      this.rex.getRex().subscribe((donnees : any) => {
        this.rexp = donnees;
        console.log(donnees)


    })


  }

  save(){
    if(this.myForm.invalid){
      alert("Veuillez remplir correctement les champs");
    }
    else{
      //let codeApp = this.myForm.get('codeApp')?.value;
      let libelleApp = this.myForm.get('libelleApp')?.value;
      let descriptionApp = this.myForm.get('descriptionApp')?.value;
      let rex = this.myForm.get('rex')?.value;
      this.mats.setMat({libelleApp:libelleApp,descriptionApp:descriptionApp,rex:{"idRex":rex}}).subscribe({



        next : data => {
          console.log(data)
          //alert("succes")
          window.location.reload();



        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });
      console.log(this.myForm.value)
    }
  }
  Search(){
    
  }

}
