import type { NormalizedEvent } from './types';

export interface Session{
    id:string;
    events: NormalizedEvent[];
    createdAt:number;
    updatedAt:number;
}
class Sessionstore{
    private sessions = new Map();
    getorcreatesession(sesssionId:string):Session{
        if(!this.sessions.has(sesssionId)){
            this.sessions.set(sesssionId,{
                id:sesssionId,
                events:[],
                createdAt:Date.now(),
                 updatedAt: Date.now(),
            })
        }
        return this.sessions.get(sesssionId)
    }
    get(sessionId:string):Session{
        return this.sessions.get(sessionId);
    }
    getAll():Session[]{
        return [...this.sessions.values()]
    }

}
export const store = new Sessionstore();