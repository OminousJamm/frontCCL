import { Component, inject } from '@angular/core';
import { product } from '../../shared/models/product';
import { InventoryService } from '../../shared/services/inventory.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule} from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';//

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, ReactiveFormsModule, FormsModule, MatCardModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  private inventoryService = inject(InventoryService)
  private router = inject(Router)
  inventory: Observable<product[]> = this.inventoryService.getInventory();
  displayedColumns: string[] = ['id', 'name', 'stock'];

  registerMove(product : product){
    this.inventoryService.updateQuantity(product).subscribe();
  }

}
