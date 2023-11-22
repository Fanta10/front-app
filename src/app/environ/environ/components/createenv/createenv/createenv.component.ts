import { Component, OnInit } from '@angular/core';
import { Environ } from '../../../models/environ';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FonctionenvironService } from '../../../services/fonctionenviron.service';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-createenv',
  templateUrl: './createenv.component.html',
  styleUrls: ['./createenv.component.css']
})
export class CreateenvComponent implements OnInit{
  mat : Environ[] = [];
  //rexp : Rex[] = [];
  myFormenv! : FormGroup;

  // customers! : Observable<Array<Environ>>;
  // errorMessage!: string;
  // searchFormGroup! : FormGroup;

  constructor( private fb : FormBuilder,
  private mats : FonctionenvironService, private fonctionSearch : HttpService ){}

  ngOnInit(): void {

    this.myFormenv = this.fb.group({

      // codeEnv:['', Validators.required],
      libelleEnv:['', Validators.required],


      })

      // this.searchFormGroup=this.fb.group({
      // keyword : this.fb.control("")
      // });
      // this.Search();

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
         // alert("succes")
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
