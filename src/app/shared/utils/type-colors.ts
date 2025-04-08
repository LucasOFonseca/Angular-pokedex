import { PokemonType } from '../models/pokemon-type.model';

export const typeColors: Record<
  PokemonType,
  { chip: string; defaultBg: string; cardBg: string }
> = {
  normal: {
    chip: 'bg-[#A8A77A]',
    defaultBg: 'bg-[#e2a95e]',
    cardBg: 'before:bg-[#e2a95e]',
  },
  fighting: {
    chip: 'bg-[#C22E28]',
    defaultBg: 'bg-[#e27d60]',
    cardBg: 'before:bg-[#e27d60]',
  },
  flying: {
    chip: 'bg-[#A98FF3]',
    defaultBg: 'bg-[#e2b4e2]',
    cardBg: 'before:bg-[#e2b4e2]',
  },
  poison: {
    chip: 'bg-[#A33EA1]',
    defaultBg: 'bg-[#e2b4e2]',
    cardBg: 'before:bg-[#e2b4e2]',
  },
  ground: {
    chip: 'bg-[#E2BF65]',
    defaultBg: 'bg-[#e2d6b4]',
    cardBg: 'before:bg-[#e2d6b4]',
  },
  rock: {
    chip: 'bg-[#B6A136]',
    defaultBg: 'bg-[#e2d6b4]',
    cardBg: 'before:bg-[#e2d6b4]',
  },
  bug: {
    chip: 'bg-[#A6B91A]',
    defaultBg: 'bg-[#a5e77d]',
    cardBg: 'before:bg-[#a5e77d]',
  },
  ghost: {
    chip: 'bg-[#735797]',
    defaultBg: 'bg-[#b4b7e2]',
    cardBg: 'before:bg-[#b4b7e2]',
  },
  steel: {
    chip: 'bg-[#B7B7CE]',
    defaultBg: 'bg-[#71a2b1]',
    cardBg: 'before:bg-[#71a2b1]',
  },
  fire: {
    chip: 'bg-[#F57D31]',
    defaultBg: 'bg-[#e2a95e]',
    cardBg: 'before:bg-[#e2a95e]',
  },
  water: {
    chip: 'bg-[#6890F0]',
    defaultBg: 'bg-[#9db7e2]',
    cardBg: 'before:bg-[#9db7e2]',
  },
  grass: {
    chip: 'bg-[#78C850]',
    defaultBg: 'bg-[#9ee8c7]',
    cardBg: 'before:bg-[#9ee8c7]',
  },
  electric: {
    chip: 'bg-[#F9CF30]',
    defaultBg: 'bg-[#eaaf4e]',
    cardBg: 'before:bg-[#eaaf4e]',
  },
  psychic: {
    chip: 'bg-[#F95587]',
    defaultBg: 'bg-[#e2b4e2]',
    cardBg: 'before:bg-[#e2b4e2]',
  },
  ice: {
    chip: 'bg-[#98D8D8]',
    defaultBg: 'bg-[#67a9d7]',
    cardBg: 'before:bg-[#67a9d7]',
  },
  dragon: {
    chip: 'bg-[#7037FF]',
    defaultBg: 'bg-[#b4b7e2]',
    cardBg: 'before:bg-[#b4b7e2]',
  },
  dark: {
    chip: 'bg-[#705848]',
    defaultBg: 'bg-[#392929]',
    cardBg: 'before:bg-[#392929]',
  },
  fairy: {
    chip: 'bg-[#EE99AC]',
    defaultBg: 'bg-[#e2b4e2]',
    cardBg: 'before:bg-[#e2b4e2]',
  },
  stellar: {
    chip: 'bg-[#68A090]',
    defaultBg: 'bg-[#72a463]',
    cardBg: 'before:bg-[#72a463]',
  },
  unknown: {
    chip: 'bg-[#808080]',
    defaultBg: 'bg-[#a2a2a2]',
    cardBg: 'before:bg-[#a2a2a2]',
  },
  shadow: {
    chip: 'bg-[#2A2A2A]',
    defaultBg: 'bg-[#a2a2a2]',
    cardBg: 'before:bg-[#a2a2a2]',
  },
};
