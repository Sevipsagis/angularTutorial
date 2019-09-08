import { OperatorService } from './../../services/operator.service';
import { Operator } from './../../models/operator';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-operators-detail',
  templateUrl: './operators-detail.component.html',
  styleUrls: ['./operators-detail.component.css']
})
export class OperatorsDetailComponent implements OnInit {
  operator: Operator;

  getOperator(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operatorService.getOperator(id)
      .subscribe(op => this.operator = op);
  }

  save(): void{
    this.operatorService.updateOperator(this.operator).subscribe(
      () => this.goBack()
    )
  }

  goBack(): void{
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private operatorService: OperatorService
  ) { }
  ngOnInit() {
    this.getOperator()
  }

}
