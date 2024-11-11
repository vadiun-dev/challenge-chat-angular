import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/chat-view/chat-view.module').then(module => module.ChatViewModule), // [TODO]: Cambiar al routing module, funciona paro no carga los componentes. se va a romper la cabeza jaja
    }
]