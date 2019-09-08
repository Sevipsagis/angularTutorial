import { OperatorService } from './../../services/operator.service';
import { Operator } from './../../models/operator';
import { Component, OnInit } from '@angular/core';
import { OPERATORS } from '../../mock-data';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  operators: Operator[];
  delButton = false;

  getOperators(): void {
    this.operatorService.getOperators().subscribe(oper => this.operators = oper);
  }

  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.getOperators();
  }

  showDel(){
    this.delButton = !this.delButton;
  }

  add(name: String) {
    name = name.trim();
    if (!name) { return; }
    this.operatorService.addOperator({ name } as Operator)
      .subscribe(() => {
        this.getOperators();
      }
    );
  }

  delete(operator: Operator): void {
    this.operators = this.operators.filter(op => op !== operator);
    this.operatorService.deleteOperator(operator).subscribe();
  }

}
