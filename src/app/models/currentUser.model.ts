import { User } from './user.model';

export interface CurrentUser {
    user: User;
    token: string;
}