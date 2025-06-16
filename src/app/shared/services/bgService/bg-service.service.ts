import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private currentBackgroundClass: string = '';
  private readonly classPrefix = 'bg-';

  /**
   * Sets a background class on the body element
   * @param className - The class name (without 'bg-' prefix)
   */
  setBackgroundClass(className: string): void {
    // Remove current background class if exists
    this.removeCurrentBackgroundClass();

    // Add new background class
    if (className) {
      const fullClassName = className.startsWith(this.classPrefix)
        ? className
        : this.classPrefix + className;

      document.body.classList.add(fullClassName);
      this.currentBackgroundClass = fullClassName;
    }
  }

  /**
   * Removes the current background class from body
   */
  removeBackgroundClass(): void {
    this.removeCurrentBackgroundClass();
  }

  /**
   * Gets the current background class
   */
  getCurrentBackgroundClass(): string {
    return this.currentBackgroundClass;
  }

  private removeCurrentBackgroundClass(): void {
    if (this.currentBackgroundClass) {
      document.body.classList.remove(this.currentBackgroundClass);
      this.currentBackgroundClass = '';
    }
  }
}
