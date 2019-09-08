import { Operator } from './../models/operator';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const operators: Operator[] = [
      { id: 1, name: "Sledge", armor: 2, speed: 2, meta: true, role: "ATK" },
      { id: 2, name: "Thatcher", armor: 2, speed: 2, meta: false, role: "ATK" },
      { id: 3, name: "Twitch", armor: 1, speed: 3, meta: false, role: "ATK" },
      { id: 4, name: "Montagne", armor: 3, speed: 1, meta: false, role: "ATK" },
      { id: 5, name: "Ash", armor: 1, speed: 3, meta: true, role: "ATK" },
      { id: 6, name: "Thermite", armor: 2, speed: 2, meta: false, role: "ATK" },
      { id: 7, name: "Glaz", armor: 1, speed: 3, meta: false, role: "ATK" },
      { id: 8, name: "Fuze", armor: 3, speed: 1, meta: false, role: "ATK" },
      { id: 9, name: "IQ", armor: 1, speed: 3, meta: false, role: "ATK" },
      { id: 10, name: "Blitz", armor: 3, speed: 1, meta: false, role: "ATK" },
      { id: 11, name: "Buck", armor: 2, speed: 2, meta: false, role: "ATK" },
      { id: 12, name: "Blackbeard", armor: 2, speed: 2, meta: true, role: "ATK" },
      { id: 13, name: "Smoke", armor: 2, speed: 2, meta: false, role: "DEF" },
      { id: 14, name: "Mute", armor: 2, speed: 2, meta: false, role: "DEF" },
      { id: 15, name: "Rook", armor: 3, speed: 1, meta: false, role: "DEF" },
      { id: 16, name: "Doc", armor: 3, speed: 1, meta: false, role: "DEF" },
      { id: 17, name: "Castle", armor: 1, speed: 3, meta: false, role: "DEF" },
      { id: 18, name: "Pulse", armor: 2, speed: 2, meta: false, role: "DEF" },
      { id: 19, name: "Kapkan", armor: 1, speed: 3, meta: true, role: "DEF" },
      { id: 20, name: "Tachanka", armor: 3, speed: 1, meta: false, role: "DEF" },
      { id: 21, name: "Jager", armor: 1, speed: 3, meta: true, role: "DEF" },
      { id: 22, name: "Bandit", armor: 1, speed: 3, meta: false, role: "DEF" },
      { id: 23, name: "Frost", armor: 1, speed: 3, meta: false, role: "DEF" },
      { id: 24, name: "Valkyrie", armor: 2, speed: 2, meta: true, role: "DEF" },
  ];
    return {operators};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(operators: Operator[]): number {
    return operators.length > 0 ? Math.max(...operators.map(op => op.id)) + 1 : 11;
  }
}