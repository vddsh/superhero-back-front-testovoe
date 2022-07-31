import React, {useEffect, useState} from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import SuperHeroInformation from '../../components/SuperHeroInformation';
import SuperHeroInfoEdit from '../../components/SuperHeroInfoEdit';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {deleteSuperHeroImages, getSuperHero, updateSuperHero} from '../../store/superHeroes/superHero.slice';
import {deleteSuperHero} from '../../store/superHeroes/superHero.slice';
import {useNavigate, useParams} from 'react-router-dom';
import Container from '../../components/Container';
import {createFormData} from '../../components/services/services';


const EditPage: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {superHero} = useTypedSelector(state => state);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getSuperHero(id!));
  }, []);

  const handleSubmitUpdate = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    await dispatch(updateSuperHero({data: await createFormData(target), id: superHero._id}));
    setEdit(!edit);
  };

  const handleDeleteSuperHero = async (id: string) => {
    await dispatch(deleteSuperHero(id));
    navigate('/');
  };

  const handleDeleteSuperHeroImage = async (id: string, name: string) => {
    await dispatch(deleteSuperHeroImages({id, name}));
  };

  if (!edit) {
    return (
      <Container>
        <SuperHeroInformation superHero={superHero}/>
        <button onClick={() => {
          setEdit(!edit);
        }}>edit
        </button>
      </Container>
    );
  } else {
    return (
      <Container>
        <SuperHeroInfoEdit
          handleDeleteSuperHeroImage={handleDeleteSuperHeroImage}
          superHero={superHero}
          handleSubmitUpdate={handleSubmitUpdate}
          handleDeleteSuperHero={handleDeleteSuperHero}/>
      </Container>
    );
  }
};

export default EditPage;
