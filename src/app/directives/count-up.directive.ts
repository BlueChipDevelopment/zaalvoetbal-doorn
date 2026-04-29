import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnChanges {
  @Input('appCountUp') target = 0;
  @Input() countUpDuration = 600;
  @Input() countUpDecimals = 0;
  @Input() countUpSuffix = '';

  private started = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.started) return;
    if (!('target' in changes)) return;
    this.started = true;
    this.animate();
  }

  private animate(): void {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const target = this.target ?? 0;
    if (reduce || this.countUpDuration <= 0) {
      this.write(target);
      return;
    }
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / this.countUpDuration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      this.write(value);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  private write(value: number): void {
    const formatted = value.toFixed(this.countUpDecimals);
    this.el.nativeElement.textContent = `${formatted}${this.countUpSuffix}`;
  }
}
