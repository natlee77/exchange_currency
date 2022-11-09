import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientComponent } from './httpclient.component';

describe('HttpclientComponent', () => {
  let component: HttpClientComponent;
  let fixture: ComponentFixture<HttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
