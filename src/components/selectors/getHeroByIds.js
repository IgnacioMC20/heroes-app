import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroByIds = ( id = '' ) => {
    return heroes.find( hero => hero.id === id )
}
