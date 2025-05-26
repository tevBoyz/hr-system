import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Candidate } from './models/candidate.model';

const STORAGE_KEY = 'candidates';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const localData = localStorage.getItem(STORAGE_KEY);
    const candidates: Candidate[] = localData ? JSON.parse(localData) : [];

    return { candidates };
  }

  genId(candidates: Candidate[]): number {
    return candidates.length > 0 ? Math.max(...candidates.map(c => c.id)) + 1 : 1;
  }

  // Optional: intercept POST, PUT, DELETE to sync with localStorage
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo): ResponseOptions {
  const collectionName = reqInfo.collectionName;

  if (collectionName === 'candidates') {
    const candidates = reqInfo.utils.getDb()['candidates'];

    // ✅ Fix here: use reqInfo.method instead of reqInfo.req.method
    if (['post', 'put', 'delete'].includes(reqInfo.method.toLowerCase())) {
      localStorage.setItem('candidates', JSON.stringify(candidates));
    }
  }

  return resOptions;
}
}