import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the header navigation and footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('header nav a[href="#projects"]').length).toBeGreaterThan(0);
    expect(compiled.querySelector('footer')?.textContent).toContain('Eduard Andrei Broasca');
  });
});

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render every section the header links to', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const id of ['top', 'about', 'experience', 'projects', 'skills', 'contact']) {
      expect(compiled.querySelector(`#${id}`)).withContext(id).toBeTruthy();
    }
    expect(compiled.querySelector('h1')?.textContent).toContain('Eduard Andrei Broasca');
  });
});
