import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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

describe('HeaderComponent', () => {
  it('should close the mobile menu without cancelling the link navigation', async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentInstance.menuOpen = true;
    fixture.detectChanges();

    // Record whether the app cancelled the click, then stop the navigation so the test page stays put.
    let cancelledByApp: boolean | undefined;
    const recordAndStop = (event: Event) => {
      cancelledByApp = event.defaultPrevented;
      event.preventDefault();
    };
    document.addEventListener('click', recordAndStop);
    const link = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>('#mobile-menu a[href="#projects"]')!;
    link.click();
    document.removeEventListener('click', recordAndStop);

    expect(cancelledByApp).toBeFalse();
    expect(fixture.componentInstance.menuOpen).toBeFalse();
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
