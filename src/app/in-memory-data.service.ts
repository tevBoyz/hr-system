import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { Employee } from './models/employee.model';

const STORAGE_KEYS = {
  candidates: 'candidates',
  employees: 'employees'
};

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidatesData = localStorage.getItem(STORAGE_KEYS.candidates);
    const employeesData = localStorage.getItem(STORAGE_KEYS.employees);

    const candidates: Candidate[] = candidatesData ? JSON.parse(candidatesData) : [];
    const employees: Employee[] = employeesData ? JSON.parse(employeesData) : [];


    return { candidates, employees };
  }

  // genId(candidates: Candidate[]): number {
  //   return candidates.length > 0 ? Math.max(...candidates.map(c => c.id)) + 1 : 1;
  // }
  genId<T extends { id: number }>(collection: T[]): number {
  return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
}

  
  // Optional: intercept POST, PUT, DELETE to sync with localStorage
  // responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo): ResponseOptions {
  // const collectionName = reqInfo.collectionName;

  // if (collectionName === 'candidates') {
  //   const candidates = reqInfo.utils.getDb()['candidates'];

  //   // ✅ Fix here: use reqInfo.method instead of reqInfo.req.method
  //   if (['post', 'put', 'delete'].includes(reqInfo.method.toLowerCase())) {
  //     localStorage.setItem('candidates', JSON.stringify(candidates));
  //   }
  // }

responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo): ResponseOptions {
  const collectionName = reqInfo.collectionName;

  if (['candidates', 'employees'].includes(collectionName)) {
    const collection = reqInfo.utils.getDb()[collectionName];
    localStorage.setItem(STORAGE_KEYS[collectionName], JSON.stringify(collection));
  }

  return resOptions;
}
}