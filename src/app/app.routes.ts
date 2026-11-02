import { inject } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// The site used to have a separate page per section. Keep those URLs working
// by sending them to the matching section of the single page.
const legacySectionRoutes: Route[] = ['about', 'experience', 'projects', 'contact'].map(section => ({
	path: section,
	redirectTo: () => inject(Router).createUrlTree([''], { fragment: section }),
}));

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	...legacySectionRoutes,
	{ path: '**', redirectTo: '' }
];
