import {TypeormDatabase} from '@subsquid/typeorm-store'
import { Gravatar } from './model'
import {processor} from './processor'
import * as GravatarABI from "./abi/Gravity";
processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    const gravatars: Map<string, Gravatar> = new Map();
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
            let { idString, owner, displayName, imageUrl } = extractData(log);
            let gravatar =new Gravatar({
                id: idString,
                owner,
                displayName,
                imageUrl,
            })
              gravatars.set(idString, gravatar);
            }
           
        }
    
    await ctx.store.upsert([...gravatars.values()]);
});

function extractData(log: any): { 
    idString: string, 
    owner: string, 
    displayName: string, 
    imageUrl: string 
} {;
    if (log.topics[0] === GravatarABI.events.NewGravatar.topic) { 
        let{id, owner, displayName, imageUrl} = GravatarABI.events.NewGravatar.decode(log);
        let idString = id.toString(16);
        return{idString, owner, displayName, imageUrl };  
    
    }
    if (log.topics[0] === GravatarABI.events.UpdatedGravatar.topic) { 
        let{id, owner, displayName, imageUrl} = 
         GravatarABI.events.UpdatedGravatar.decode(log);
    let idString = id.toString(16);
    return{idString, owner, displayName, imageUrl };
    
    }
      throw new Error("Unsupported topic");
    }
  

