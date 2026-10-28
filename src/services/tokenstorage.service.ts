import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorageService {
    private readonly key = 'access_token';

    save(token: string): void {
        sessionStorage.setItem(this.key, token);
    }

    get(): string | null {
        return sessionStorage.getItem(this.key);
    }

    clear(): void {
        sessionStorage.removeItem(this.key);
    }
}