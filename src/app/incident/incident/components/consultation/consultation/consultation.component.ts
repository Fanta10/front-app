import { Incident } from './../../../models/incident';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FonctionincidentService } from '../../../services/fonctionincident.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

   incident! : Incident;

  constructor(private route : Router, private currentRoute: ActivatedRoute, private serviceIncident: FonctionincidentService ){}

  ngOnInit(): void {
    let idIncident = this.currentRoute.snapshot.params['search'];
    console.log(idIncident)
    this.serviceIncident.find(idIncident).subscribe((data1 : any) => {
        this.incident = data1;
        console.log(this.incident)




      // next : data1 => {
      //   console.log(data1)
      //   alert("succes")
      //   window.location.reload();
      // },
      // error : error => {
      //   console.log(error)
      //   alert("error")
      // }
    });
  }
}
