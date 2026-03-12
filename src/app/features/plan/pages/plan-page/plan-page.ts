import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { PlanService } from '../../../../core/services/plan';
import { PlanItem } from '../../../../core/models/plan-item.model';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './plan-page.html',
  styleUrl: './plan-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanPage {
  private readonly planService = inject(PlanService);

  protected readonly items: PlanItem[] = this.planService.getPlan();
}