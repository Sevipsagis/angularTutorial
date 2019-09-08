import { OperatorService } from './../../services/operator.service';
import { Operator } from './../../models/operator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  operatorsAtk: Operator[] = []
  operatorsDef: Operator[] = []
  operatorsTopPick: Operator[] = []
  operatorsTopBan: Operator[] = []

  getOperators(){
    this.operatorService.getTopAtk().subscribe(op => this.operatorsAtk = op);
    this.operatorService.getTopDef().subscribe(op => this.operatorsDef = op);
    this.operatorService.getTopPick().subscribe(op => this.operatorsTopPick = op);
    this.operatorService.getTopBan().subscribe(op => this.operatorsTopBan = op);
  }

  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.getOperators()
  }


}
