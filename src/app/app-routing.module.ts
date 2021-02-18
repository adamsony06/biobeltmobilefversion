import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'instalpieges',
    loadChildren: () => import('./instalpieges/instalpieges.module').then( m => m.InstalpiegesPageModule)
  },
  {
    path: 'bottles',
    loadChildren: () => import('./bottles/bottles.module').then( m => m.BottlesPageModule)
  },
  {
    path: 'bottlemodal',
    loadChildren: () => import('./modal/bottlemodal/bottlemodal.module').then( m => m.BottlemodalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'canvas',
    loadChildren: () => import('./canvas/canvas.module').then( m => m.CanvasPageModule)
  },
  {
    path: 'removebottle',
    loadChildren: () => import('./removebottle/removebottle.module').then( m => m.RemovebottlePageModule)
  },
  {
    path: 'optionbottle',
    loadChildren: () => import('./optionbottle/optionbottle.module').then( m => m.OptionbottlePageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'addbottlemodal',
    loadChildren: () => import('./addbottlemodal/addbottlemodal.module').then( m => m.AddbottlemodalPageModule)
  },
  {
    path: 'addbottleceint',
    loadChildren: () => import('./addbottleceint/addbottleceint.module').then( m => m.AddbottleceintPageModule)
  },
  {
    path: 'rackcontent',
    loadChildren: () => import('./rackcontent/rackcontent.module').then( m => m.RackcontentPageModule)
  },
  {
    path: 'choosestock',
    loadChildren: () => import('./choosestock/choosestock.module').then( m => m.ChoosestockPageModule)
  },
  {
    path: 'adjustment',
    loadChildren: () => import('./adjustment/adjustment.module').then( m => m.AdjustmentPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'controldiff',
    loadChildren: () => import('./controldiff/controldiff.module').then( m => m.ControldiffPageModule)
  },
  {
    path: 'synchro',
    loadChildren: () => import('./synchro/synchro.module').then( m => m.SynchroPageModule)
  },
  {
    path: 'cdiff',
    loadChildren: () => import('./cdiff/cdiff.module').then( m => m.CdiffPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
