import { Incident } from './../../../models/incident';
import { Component, OnInit } from '@angular/core';
//import { Incident } from '../../../models/incident';
import { Logiciel } from 'src/app/logiciel/logiciel/models/logiciel';
import { Environ } from 'src/app/environ/environ/models/environ';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FonctionincidentService } from '../../../services/fonctionincident.service';
import { FonctionenvironService } from 'src/app/environ/environ/services/fonctionenviron.service';
import { FonctionlogicielService } from 'src/app/logiciel/logiciel/services/fonctionlogiciel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultationreso',
  templateUrl: './consultationreso.component.html',
  styleUrls: ['./consultationreso.component.css']
})
export class ConsultationresoComponent implements OnInit{
  mat : Incident[] = [];
  //resol : Resolution[] = [];
  logiciel : Logiciel[] = [];
  environment : Environ[] = [];
  myForm! : FormGroup;
  //incidents! : Incident;
  // route! :Router

  constructor( private fb : FormBuilder,
    private mats : FonctionincidentService,
    private envapp : FonctionenvironService,
    private appenv : FonctionlogicielService,
    private incident : FonctionincidentService,
    private route : Router,private currentRoute: ActivatedRoute
     ){}

    ngOnInit(): void {


      this.myForm = this.fb.group({

        //codeInc:['', Validators.required],
        //libelleInc:['', Validators.required],
        incident:['', Validators.required],
         logiciel:['', Validators.required],
         environment:['', Validators.required]


        })
        this.appenv.getMateriels().subscribe((donnees : any) => {
          this.logiciel = donnees;
          console.log(donnees)


      });

      this.envapp.getMateriels().subscribe((data : any) => {
        this.environment = data;
        console.log(data)


    })
    this.incident.getIncident().subscribe((data1 : any) => {
      this.mat = data1;
      console.log(data1)


  })
}
save(){
  if(this.myForm.invalid){
    alert("Veuillez remplir correctement les champs");
  }
  else{
    //let codeInc = this.myForm.get('codeInc')?.value;
    //let libelleInc = this.myForm.get('libelleInc')?.value;
    let incident = this.myForm.get('incident')?.value;
    // let appEnv = this.myForm.get('logiciel')?.value;
    // let envApp = this.myForm.get('environnement')?.value;
    // this.mats.setMat({incident:{"idInc":incident},appEnv:{"idApp":appEnv},envApp:{"idEnv":envApp}}).subscribe({

    //   next : data => {
    //     console.log(data)
    //     alert("succes")
    //     window.location.reload();



    //   },
    //   error : error => {
    //     console.log(error)
    //     alert("error")
    //   }
    // });

    console.log(this.myForm.value)
    // let idIncident = this.currentRoute.snapshot.params['search'];
    // console.log(idIncident)
    // this.mats.find(idIncident).subscribe((data2 : any) => {
    //     this.incidents = data2;
    //     console.log(this.incident)




      // next : data1 => {
      //   console.log(data1)
      //   alert("succes")
      //   window.location.reload();
      // },
      // error : error => {
      //   console.log(error)
      //   alert("error")
      // }
    //});
  }
    this.route.navigate([`consulter/${this.incident}`]);

  }
}


