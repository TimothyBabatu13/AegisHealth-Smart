import { AppointmentTableContextType, AuthContextType } from '@/types/types';
import { Context, useContext } from 'react'

export const useContextHook = (Context: Context<AuthContextType | null>) => {
    
    const context = useContext(Context);
    if(context === null ) {
        throw new Error('using context hook outside it container');
    };
    
    return context;
}