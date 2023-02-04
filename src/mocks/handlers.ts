import authHandlers from './auth';
import columnHandlers from './column';
import mealHandlers from './meal';

export const handlers = [...authHandlers, ...mealHandlers, ...columnHandlers];
