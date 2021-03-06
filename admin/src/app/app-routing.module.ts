import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ActivateGuard} from './activate.guard';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ItemComponent } from './item/item.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DashboardmodelComponent } from './dashboardmodel/dashboardmodel.component';

const routes: Routes = [
 { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  
  { path: 'category', component:CategoryComponent },  
  { path: 'subcategory', component:SubCategoryComponent }, 
  { path: 'item', component:ItemComponent },  
  { path: 'dashboard', component: DashboardComponent , canActivate:[ActivateGuard]},
  { path: 'dashboardmodel', component:DashboardmodelComponent},
  { path: 'user', component: UserComponent },

 { path: 'editprofile', component: EditprofileComponent },

  { path: 'editcategory', component:EditCategoryComponent},
  { path: 'test', component:TestComponent},
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
