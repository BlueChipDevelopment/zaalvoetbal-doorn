import { Component, ViewChild, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CountUpDirective } from './count-up.directive';

@Component({
  standalone: true,
  imports: [CountUpDirective],
  template: `<span #el [appCountUp]="value" [countUpDuration]="0" [countUpDecimals]="decimals" [countUpSuffix]="suffix"></span>`,
})
class HostComponent {
  value = 0;
  decimals = 0;
  suffix = '';
  @ViewChild('el') el!: ElementRef<HTMLElement>;
}

describe('CountUpDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({ imports: [HostComponent] }).createComponent(HostComponent);
  });

  it('schrijft direct eindwaarde bij duration=0', () => {
    fixture.componentInstance.value = 42;
    fixture.detectChanges();
    expect(fixture.componentInstance.el.nativeElement.textContent).toBe('42');
  });

  it('formatteert met decimalen', () => {
    fixture.componentInstance.value = 7.123;
    fixture.componentInstance.decimals = 1;
    fixture.detectChanges();
    expect(fixture.componentInstance.el.nativeElement.textContent).toBe('7.1');
  });

  it('voegt suffix toe', () => {
    fixture.componentInstance.value = 50;
    fixture.componentInstance.suffix = '%';
    fixture.detectChanges();
    expect(fixture.componentInstance.el.nativeElement.textContent).toBe('50%');
  });
});
