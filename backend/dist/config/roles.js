import { Role } from '../generated/prisma/index.js';
const allRoles = {
    [Role.USER]: ['getConversions', 'manageConversions'],
    [Role.ADMIN]: ['getUsers', 'manageUsers', 'getConversions', 'manageConversions']
};
export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
