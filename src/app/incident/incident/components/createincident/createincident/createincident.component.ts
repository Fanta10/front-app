import { Incident } from './../../../models/incident';
import { FonctionlogicielService } from './../../../../../logiciel/logiciel/services/fonctionlogiciel.service';
import { FonctionenvironService } from './../../../../../environ/environ/services/fonctionenviron.service';
import { Resolution } from './../../../models/resolution';
//import { Logiciel } from 'src/app/logiciel/logiciel/models/logiciel';
//import { environment } from 'src/app/environnement/environnement.dev';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppEnv } from '../../../models/app-env';
import { FonctionresolutionService } from '../../../services/fonctionresolution.service';
import { FonctionincidentService } from '../../../services/fonctionincident.service';
import { FonctionappenvService } from '../../../services/fonctionappenv.service';
import { Logiciel } from '../../../../../logiciel/logiciel/models/logiciel';
import { Environ } from '../../../../../environ/environ/models/environ';
import { PayloadIncident } from '../../../models/payload-incident';
//import { Environ } from 'src/app/environ/environ/models/environ';
//import { FonctionlogicielService } from 'src/app/logiciel/logiciel/services/fonctionlogiciel.service';
//import { FonctionenvironService } from 'src/app/environ/environ/services/fonctionenviron.service';

@Component({
  selector: 'app-createincident',
  templateUrl: './createincident.component.html',
  styleUrls: ['./createincident.component.css']
})
export class CreateincidentComponent implements OnInit {

  mat: Incident[] = [];
  resol: Resolution[] = [];
  logiciel: Logiciel[] = [];
  environment: Environ[] = [];
  myForm!: FormGroup;
  formData : FormData = new FormData();
  file? : any;

  constructor(private fb: FormBuilder,
    private reso: FonctionresolutionService,
    private mats: FonctionincidentService,
    private envapp: FonctionenvironService,
    private appenv: FonctionlogicielService,
    private incident: FonctionincidentService) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({

     // codeInc: ['', Validators.required],
      libelleInc: ['', Validators.required],
      resolution: ['', Validators.required],
      logiciel: ['', Validators.required],
      environnement: ['', Validators.required]


    })

    this.appenv.getMateriels().subscribe((donnees: any) => {
      this.logiciel = donnees;
      console.log(donnees)


    });

    this.envapp.getMateriels().subscribe((data: any) => {
      this.environment = data;
      console.log(data)


    })
    // this.incident.getIncident().subscribe((data1: any) => {
    //   this.incident = data1;
    //   console.log(data1)


    // })
  }
  onSave() {
    if (this.myForm.invalid) {

      alert("Veuillez remplir correctement les champs");
    }
    else {


      const formData = new FormData();

      console.log(this.myForm);

      let codeInc = this.myForm.get('codeInc')?.value;
      let libelleInc = this.myForm.get('libelleInc')?.value;
      let resolution = this.myForm.get('resolution')?.value;
      let logiciel = this.myForm.get('logiciel')?.value;
      let environnement = this.myForm.get('environnement')?.value;
      // let fichier = resolution;
      let incident: Incident = {
        idInc: 0,
        //codeInc:codeInc,
        libelleInc: libelleInc,
        environnement: environnement,
        logiciel: logiciel,
        resolution: ""
      };
      let payloadIncident: PayloadIncident = {
        ploadIncudent: incident,
        document: this.file
      }
      this.formData?.append("libelleInc",libelleInc)
      this.formData?.append("environnement",environnement)
      this.formData?.append("logiciel",logiciel)
      this.formData?.append("resolution",resolution)


      //console.log(payloadIncident)
      //console.log(formData)
      this.formData.forEach((key,value)=>{
        console.log(key, value)})


      this.mats.setMat(this.formData).subscribe({



        next: data => {
          console.log(data)
          alert("succes")
          window.location.reload();



        },
        error: error => {
          console.log(error)
          alert("error: veuillez uploader un fichier dont la taille est inferieur à 1000 ")
        }
      });
      console.log(this.myForm.value)
    }

  }

 public onFileSelected(ev:any) {
     this.file = ev.target.files[0];

    if (this.file) {

       //this.formData = new FormData();
      this.formData.append("document", this.file);
      console.log(this.file)
    }

  }
}
