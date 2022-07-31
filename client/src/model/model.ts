import React, {Dispatch, SetStateAction} from 'react';

export interface Image {
  filename: string;
  path: string;
  _id: string;
}

export interface ISuperHero {
  _id: string;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  Images: Image[];
  __v: number;
}

export interface ISuperHeroes {
  data: ISuperHero[];
  totalPages: number;
}

export interface ImagesContainerProps {
  children: React.ReactNode;
}

export interface HandleChangeEditProps {
  handleChangeEdit: () => void;
}

export interface superHeroProps {
  superHero: ISuperHero;
}

export interface SuperHeroInformationProps {
  handleChangeEdit: () => void;
  superHero: ISuperHero;
}

export interface SuperHeroInfoEditProps {
  handleChangeEdit: () => void;
  handleDeleteSuperHeroImage: (id: string, name: string) => Promise<void>;
  superHero: ISuperHero;
  handleDeleteSuperHero: (id: string) => Promise<void>;
  handleSubmitUpdate: (event: React.SyntheticEvent) => Promise<void>;
}

export interface CreateHeroButtonProps {
  label: string;
  modal?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
}

export interface ModalProps {
  handleSubmitModalPost?: (event: React.SyntheticEvent) => Promise<void>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export interface SuperHeroTextInfoProps {
  data: string;
  label: string;
}